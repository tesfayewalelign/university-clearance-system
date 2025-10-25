import type { Request, Response } from "express";
import prisma from "../config/db.js";

export const getPendingRequestsForDepartment = async (
  req: Request,
  res: Response
) => {
  try {
    const user = req.user;

    if (!user || !user.departmentId) {
      return res
        .status(403)
        .json({ message: "Access denied: not a department officer" });
    }

    const pendingRequests = await prisma.departmentClearanceStatus.findMany({
      where: {
        department_id: user.departmentId,
        status: "Pending",
      },
      include: {
        clearanceRequest: {
          include: {
            student: {
              select: { id: true, full_name: true, email: true },
            },
          },
        },
        department: true,
      },
    });

    res.status(200).json({
      message: "Pending requests for your department",
      count: pendingRequests.length,
      data: pendingRequests,
    });
  } catch (error) {
    console.error("Error fetching pending requests:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateDepartmentStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, comment } = req.body;
    const user = req.user;

    if (!user || !user.departmentId) {
      return res
        .status(403)
        .json({ message: "Access denied: not a department officer" });
    }

    if (!["Approved", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updated = await prisma.departmentClearanceStatus.update({
      where: { id: Number(id) },
      data: {
        status,
        comment,
      },
    });

    const relatedStatuses = await prisma.departmentClearanceStatus.findMany({
      where: { clearance_request_id: updated.clearance_request_id },
    });

    const allApproved = relatedStatuses.every((s) => s.status === "Approved");
    const anyRejected = relatedStatuses.some((s) => s.status === "Rejected");

    let finalStatus = "Pending";
    if (anyRejected) finalStatus = "Rejected";
    else if (allApproved) finalStatus = "Approved";

    await prisma.clearanceRequest.update({
      where: { id: updated.clearance_request_id },
      data: { overallStatus: finalStatus },
    });

    res.status(200).json({
      message: "Department clearance status updated successfully",
      data: updated,
    });
  } catch (error) {
    console.error("Error updating department status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
