import type { Request, Response } from "express";
import logger from "../utils/logger.js";
import prisma from "../config/db.js";

export const createDepartment = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Department name is required" });
    }

    const existing = await prisma.department.findUnique({ where: { name } });
    if (existing) {
      return res.status(400).json({ message: "Department already exists" });
    }

    const department = await prisma.department.create({ data: { name } });

    res.status(201).json({ message: "Department created", department });
  } catch (error: any) {
    logger.error(`Error creating department: ${error.message}`);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await prisma.department.findMany();
    res.status(200).json({ message: "Departments fetched", departments });
  } catch (error: any) {
    logger.error(`Error fetching departments: ${error.message}`);
    res.status(500).json({ message: "Server error" });
  }
};

export const getDepartmentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const department = await prisma.department.findUnique({
      where: { id: Number(id) },
    });

    if (!department)
      return res.status(404).json({ message: "Department not found" });

    res.status(200).json({ message: "Department fetched", department });
  } catch (error: any) {
    logger.error(`Error fetching department by id: ${error.message}`);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateDepartment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name)
      return res.status(400).json({ message: "Department name required" });

    const department = await prisma.department.findUnique({
      where: { id: Number(id) },
    });
    if (!department)
      return res.status(404).json({ message: "Department not found" });

    const updated = await prisma.department.update({
      where: { id: Number(id) },
      data: { name },
    });

    res
      .status(200)
      .json({ message: "Department updated", department: updated });
  } catch (error: any) {
    logger.error(`Error updating department: ${error.message}`);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteDepartment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const department = await prisma.department.findUnique({
      where: { id: Number(id) },
    });
    if (!department)
      return res.status(404).json({ message: "Department not found" });

    await prisma.department.delete({ where: { id: Number(id) } });

    res.status(200).json({ message: "Department deleted successfully" });
  } catch (error: any) {
    logger.error(`Error deleting department: ${error.message}`);
    res.status(500).json({ message: "Server error" });
  }
};
