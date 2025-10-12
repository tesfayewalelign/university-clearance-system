import type { Request, Response } from "express";
import prisma from "../config/db.js";
import logger from "../utils/logger.js";

export async function createDepartmentStatus(req: Request, res: Response) {
  try {
    const { department_id, clearance_request_id, status, comment } = req.body;

    const newStatus = await prisma.departmentClearanceStatus.create({
      data: {
        department_id,
        clearance_request_id,
        status,
        comment,
      },
    });

    logger.info("Department clearance status created successfully");
    res.status(201).json({
      message: "Department clearance status created successfully",
      data: newStatus,
    });
  } catch (error: any) {
    logger.error(
      `Error creating department clearance status: ${error.message}`
    );
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getAllDepartmentStatuses(req: Request, res: Response) {
  try {
    const statuses = await prisma.departmentClearanceStatus.findMany({
      include: {
        department: true,
        clearanceRequest: true,
      },
    });

    logger.info("Fetched all department clearance statuses");
    res.json(statuses);
  } catch (error: any) {
    logger.error(`Error fetching statuses: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getDepartmentStatusById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const status = await prisma.departmentClearanceStatus.findUnique({
      where: { id: Number(id) },
      include: {
        department: true,
        clearanceRequest: true,
      },
    });

    if (!status) {
      logger.warn(`Department clearance status not found with ID ${id}`);
      return res.status(404).json({ message: "Status not found" });
    }

    logger.info(`Fetched department clearance status with ID ${id}`);
    res.json(status);
  } catch (error: any) {
    logger.error(`Error fetching status: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateDepartmentStatus(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { status, comment } = req.body;

    const updated = await prisma.departmentClearanceStatus.update({
      where: { id: Number(id) },
      data: { status, comment },
    });

    logger.info(`Department clearance status updated successfully: ID ${id}`);
    res.json({
      message: "Department clearance status updated successfully",
      data: updated,
    });
  } catch (error: any) {
    logger.error(`Error updating status: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteDepartmentStatus(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await prisma.departmentClearanceStatus.delete({
      where: { id: Number(id) },
    });

    logger.info(`Department clearance status deleted successfully: ID ${id}`);
    res.json({ message: "Department clearance status deleted successfully" });
  } catch (error: any) {
    logger.error(`Error deleting status: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
}
