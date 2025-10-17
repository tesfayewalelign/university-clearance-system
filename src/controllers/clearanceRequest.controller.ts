import type { Request, Response } from "express";
import prisma from "../config/db.js";
import logger from "../utils/logger.js";

export const createClearanceRequest = async (req: Request, res: Response) => {
  try {
    const studentId = req.user?.id;

    if (!studentId) {
      logger.warn("Unauthorized access attempt to create clearance request");
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (req.user?.role !== "STUDENT") {
      logger.warn(
        `User ID ${studentId} with role ${req.user?.role} tried to create clearance request`
      );
      return res
        .status(403)
        .json({ message: "Only students can submit clearance requests" });
    }

    const { departmentId } = req.body;
    if (!departmentId) {
      return res.status(400).json({ message: "Department is required" });
    }

    const existingRequest = await prisma.clearanceRequest.findFirst({
      where: {
        student_id: studentId,
        department_id: departmentId,
        overall_status: { in: ["Pending", "Approved", "Rejected"] },
      },
    });

    if (existingRequest) {
      logger.info(
        `Student ID ${studentId} tried to create a duplicate clearance request for department ID ${departmentId}`
      );
      return res.status(400).json({
        message:
          "You already have an active clearance request for this department.",
      });
    }

    const newRequest = await prisma.clearanceRequest.create({
      data: {
        student_id: studentId,
        department_id: departmentId,
        overall_status: "Pending",
      },
    });

    logger.info(
      `Clearance request created successfully for student ID ${studentId} and department ID ${departmentId}`
    );
    res.status(201).json({
      message: "Clearance request created successfully.",
      request: newRequest,
    });
  } catch (error: any) {
    logger.error(`Error creating clearance request: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const getAllClearanceRequests = async (req: Request, res: Response) => {
  try {
    let requests;

    if (req.user.role === "ADMIN" || req.user.role === "SUPER_ADMIN") {
      requests = await prisma.clearanceRequest.findMany({
        include: { student: true, department: true },
      });
    } else if (
      req.user.role === "CLEARANCE_OFFICER" ||
      req.user.role === "DEPARTMENT"
    ) {
      requests = await prisma.clearanceRequest.findMany({
        where: { departmentId: req.user.departmentId },
        include: { student: true, department: true },
      });
    } else {
      return res.status(403).json({ message: "Access denied" });
    }

    res.status(200).json({ message: "Requests fetched", requests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
export const getMyRequests = async (req: Request, res: Response) => {
  try {
    if (!req.user || req.user.role !== "STUDENT") {
      return res
        .status(403)
        .json({ message: "Only students can view their requests" });
    }

    const requests = await prisma.clearanceRequest.findMany({
      where: { studentId: req.user.id },
      include: { department: true },
    });

    res.status(200).json({ message: "My requests fetched", requests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
export const updateRequestStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (
      !req.user ||
      (req.user.role !== "DEPARTMENT" && req.user.role !== "CLEARANCE_OFFICER")
    ) {
      return res.status(403).json({ message: "Access denied" });
    }

    if (!["Pending", "Approved", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const request = await prisma.clearanceRequest.findUnique({
      where: { id: Number(id) },
    });
    if (!request) return res.status(404).json({ message: "Request not found" });

    // Check department matches officer's department
    if (request.departmentId !== req.user.departmentId) {
      return res
        .status(403)
        .json({ message: "Cannot update request for another department" });
    }

    const updated = await prisma.clearanceRequest.update({
      where: { id: Number(id) },
      data: { status },
    });

    res
      .status(200)
      .json({ message: "Request status updated", request: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

/**
 * DELETE REQUEST
 * Only admin/superadmin
 */
export const deleteRequest = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (
      !req.user ||
      (req.user.role !== "ADMIN" && req.user.role !== "SUPER_ADMIN")
    ) {
      return res.status(403).json({ message: "Access denied" });
    }

    const request = await prisma.clearanceRequest.findUnique({
      where: { id: Number(id) },
    });
    if (!request) return res.status(404).json({ message: "Request not found" });

    await prisma.clearanceRequest.delete({ where: { id: Number(id) } });

    res.status(200).json({ message: "Request deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
