import type { Request, Response } from "express";
import * as departmentService from "../services/department.service.js";

export const createDepartment = async (req: Request, res: Response) => {
  try {
    const dept = await departmentService.createDepartment(req.body);
    res.status(201).json(dept);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create department" });
  }
};

export const getDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await departmentService.getDepartments();
    res.json(departments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch departments" });
  }
};

export const updateDepartment = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const updated = await departmentService.updateDepartment(id, req.body);
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update department" });
  }
};

export const deleteDepartment = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await departmentService.deleteDepartment(id);
    res.json({ message: "Department deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete department" });
  }
};
