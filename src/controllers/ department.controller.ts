import type { Request, Response } from "express";
import * as departmentService from "../services/department.service.js";
import logger from "../utils/logger.js";

export const createDepartment = async (req: Request, res: Response) => {
  try {
    const dept = await departmentService.createDepartment(req.body);
    logger.info("Department created successfully");
    res.status(201).json(dept);
  } catch (error: any) {
    logger.error(`Failed to create department: ${error.message}`);
    res.status(500).json({ message: "Failed to create department" });
  }
};

export const getDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await departmentService.getDepartments();
    logger.info("Fetched all departments successfully");
    res.json(departments);
  } catch (error: any) {
    logger.error(`Failed to fetch departments: ${error.message}`);
    res.status(500).json({ message: "Failed to fetch departments" });
  }
};

export const updateDepartment = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const updated = await departmentService.updateDepartment(id, req.body);
    logger.info(`Department updated successfully: ID ${id}`);
    res.json(updated);
  } catch (error: any) {
    logger.error(`Failed to update department: ${error.message}`);
    res.status(500).json({ message: "Failed to update department" });
  }
};

export const deleteDepartment = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await departmentService.deleteDepartment(id);
    logger.info(`Department deleted successfully: ID ${id}`);
    res.json({ message: "Department deleted successfully" });
  } catch (error: any) {
    logger.error(`Failed to delete department: ${error.message}`);
    res.status(500).json({ message: "Failed to delete department" });
  }
};
