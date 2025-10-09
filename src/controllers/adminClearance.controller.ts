import type { Request, Response } from "express";
import prisma from "../config/db.js";

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

    res.status(201).json({
      message: "Department clearance status created successfully",
      data: newStatus,
    });
  } catch (error) {
    console.error("Error creating department clearance status:", error);
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

    res.json(statuses);
  } catch (error) {
    console.error("Error fetching statuses:", error);
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

    if (!status) return res.status(404).json({ message: "Status not found" });

    res.json(status);
  } catch (error) {
    console.error("Error fetching status:", error);
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

    res.json({
      message: "Department clearance status updated successfully",
      data: updated,
    });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteDepartmentStatus(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await prisma.departmentClearanceStatus.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Department clearance status deleted successfully" });
  } catch (error) {
    console.error("Error deleting status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
