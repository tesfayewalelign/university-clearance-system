import type { Request, Response } from "express";
import prisma from "../config/db.js";

export async function assignDepartment(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { departmentId } = req.body;

    if (!req.user || req.user.role !== "ADMIN") {
      return res.status(403).json({ message: "Forbidden: Not allowed" });
    }

    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    if (!user) return res.status(404).json({ message: "User not found" });

    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { departmentId: Number(departmentId) },
      select: {
        id: true,
        full_name: true,
        email: true,
        role: true,
        departmentId: true,
      },
    });

    return res.json({
      message: "Department assigned successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("Assign department error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
