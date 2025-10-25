import type { Request, Response } from "express";
import prisma from "../config/db.js";

export const getMyClearanceStatus = async (req: Request, res: Response) => {
  try {
    const studentId = req.user?.id;
    if (!studentId) return res.status(401).json({ message: "Unauthorized" });

    const request = await prisma.clearanceRequest.findFirst({
      where: { studentId },
      include: {
        departmentStatuses: { include: { department: true } },
      },
    });

    if (!request)
      return res.status(404).json({ message: "No clearance request found" });

    res.status(200).json({
      message: "Your clearance request status",
      data: request,
    });
  } catch (error) {
    console.error("Error fetching student clearance status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getStudentDashboard = async (req: Request, res: Response) => {
  try {
    const studentId = req.user?.id;
    if (!studentId) return res.status(401).json({ message: "Unauthorized" });

    const request = await prisma.clearanceRequest.findFirst({
      where: { studentId },
      include: { departmentStatuses: true },
    });

    const pendingCount =
      request?.departmentStatuses.filter((s) => s.status === "Pending")
        .length || 0;

    res.status(200).json({
      message: "Student dashboard data",
      overallStatus: request?.overallStatus || "No request",
      pendingDepartments: pendingCount,
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
