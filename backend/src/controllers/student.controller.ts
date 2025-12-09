import type { Request, Response } from "express";
import prisma from "../config/db.js";
import { error } from "console";

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
export const getStudentProfile = async (req: Request, res: Response) => {
  try {
    if (!req.user?.id) return res.status(401).json({ message: "Unauthorized" });

    const student = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        full_name: true,
        email: true,
        departmentId: true,
      },
    });

    if (!student) return res.status(404).json({ message: "Student not found" });

    let departmentName: string | null = null;
    if (student.departmentId) {
      const department = await prisma.department.findUnique({
        where: { id: student.departmentId },
        select: { name: true },
      });
      departmentName = department?.name || null;
    }

    res.json({
      id: student.id,
      name: student.full_name,
      email: student.email,
      department: departmentName,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateClearanceStatus = async (req: Request, res: Response) => {
  try {
    const studentId = req.user?.id;
    const { department } = req.params;

    if (!studentId) return res.status(401).json({ message: "Unauthorized" });

    const clearanceRequest = await prisma.clearanceRequest.findFirst({
      where: { studentId },
      include: {
        departmentStatuses: { include: { department: true } },
      },
    });

    if (!clearanceRequest)
      return res.status(404).json({ message: "Clearance request not found" });

    const deptStatus = clearanceRequest.departmentStatuses.find(
      (d) => d.department.name === department
    );

    if (!deptStatus)
      return res.status(404).json({ message: "Department not found" });

    const updatedDeptStatus = await prisma.departmentClearanceStatus.update({
      where: { id: deptStatus.id },
      data: { status: "Approved" },
    });

    const updatedRequest = await prisma.clearanceRequest.findUnique({
      where: { id: clearanceRequest.id },
      include: { departmentStatuses: true },
    });

    res.status(200).json({
      message: "Department clearance approved",
      updatedDeptStatus,
      updatedRequest,
    });
  } catch (err: any) {
    console.error("Error updating clearance status:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
