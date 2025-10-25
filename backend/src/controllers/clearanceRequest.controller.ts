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

    const existingRequest = await prisma.clearanceRequest.findFirst({
      where: {
        studentId,
        overallStatus: { in: ["Pending", "Approved"] },
      },
    });

    if (existingRequest) {
      logger.info(
        `Student ID ${studentId} tried to create a duplicate clearance request`
      );
      return res.status(400).json({
        message: "You already have an active clearance request.",
      });
    }

    const departments = await prisma.department.findMany();
    const mainDepartmentId = departments[0]?.id;
    if (!mainDepartmentId) {
      return res.status(500).json({ message: "No departments found" });
    }
    const newRequest = await prisma.clearanceRequest.create({
      data: {
        studentId: studentId,
        overallStatus: "Pending",
        departmentId: mainDepartmentId,
        departmentStatuses: {
          create: departments.map((d) => ({
            status: "Pending",
            department: { connect: { id: d.id } },
          })),
        },
      },
      include: { departmentStatuses: true },
    });

    logger.info(
      `Clearance request created successfully for student ID ${studentId} with all departments`
    );

    res.status(201).json({
      message: "Clearance request created successfully for all departments.",
      request: newRequest,
    });
  } catch (error: any) {
    logger.error(`Error creating clearance request: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMyClearanceRequests = async (req: Request, res: Response) => {
  try {
    const studentId = req.user?.id;

    if (!studentId) {
      logger.warn("Unauthorized access attempt to fetch clearance requests");
      return res.status(401).json({ message: "Unauthorized" });
    }

    const requests = await prisma.clearanceRequest.findMany({
      where: { studentId },
      orderBy: { createdAt: "desc" },
    });

    logger.info(`Fetched clearance requests for student ID ${studentId}`);
    res.status(200).json({
      message: "Your clearance requests fetched successfully.",
      requests,
    });
  } catch (error: any) {
    logger.error(`Error fetching clearance requests: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllClearanceRequests = async (req: Request, res: Response) => {
  try {
    if (req.user?.role !== "ADMIN" && req.user?.role !== "SUPER_ADMIN") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const requests = await prisma.clearanceRequest.findMany({
      include: {
        student: { select: { full_name: true, email: true } },
        department: { select: { name: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    logger.info(
      `Fetched all clearance requests by ${req.user?.role} ID ${req.user?.id}`
    );
    res.status(200).json({
      message: "All clearance requests fetched successfully.",
      requests,
    });
  } catch (error: any) {
    logger.error(`Error fetching all clearance requests: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getClearanceRequestById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Request ID is required" });
    }

    if (req.user?.role !== "ADMIN" && req.user?.role !== "SUPER_ADMIN") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const request = await prisma.clearanceRequest.findUnique({
      where: { id: Number(id) },
      include: {
        student: { select: { full_name: true, email: true } },
        department: { select: { name: true } },
      },
    });

    if (!request) {
      return res.status(404).json({ message: "Clearance request not found" });
    }

    res.status(200).json({ message: "Request fetched successfully", request });
  } catch (error: any) {
    logger.error(`Error fetching clearance request: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const deleteClearanceRequest = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (req.user?.role !== "SUPER_ADMIN") {
      return res
        .status(403)
        .json({ message: "Only SUPER_ADMIN can delete requests." });
    }

    const existing = await prisma.clearanceRequest.findUnique({
      where: { id: Number(id) },
    });

    if (!existing) {
      return res.status(404).json({ message: "Request not found" });
    }

    await prisma.clearanceRequest.delete({
      where: { id: Number(id) },
    });

    logger.info(`Request ID ${id} deleted by SUPER_ADMIN ID ${req.user?.id}`);
    res
      .status(200)
      .json({ message: "Clearance request deleted successfully." });
  } catch (error: any) {
    logger.error(`Error deleting clearance request: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
