import type { Request, Response } from "express";
import prisma from "../config/db.js";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const user = req.user;

    if (!user || (user.role !== "ADMIN" && user.role !== "SUPER_ADMIN")) {
      return res.status(403).json({ message: "Access denied." });
    }

    const users = await prisma.user.findMany({
      select: {
        id: true,
        full_name: true,
        email: true,
        role: true,
        departmentId: true,
      },
    });

    res.status(200).json({ message: "Users fetched successfully", users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const { id } = req.params;

    if (!user || (user.role !== "ADMIN" && user.role !== "SUPER_ADMIN")) {
      return res.status(403).json({ message: "Access denied." });
    }

    const foundUser = await prisma.user.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        full_name: true,
        email: true,
        role: true,
        departmentId: true,
      },
    });

    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User fetched successfully", user: foundUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const { id } = req.params;

    if (!user || user.role !== "SUPER_ADMIN") {
      return res
        .status(403)
        .json({ message: "Only super admin can delete users." });
    }

    const targetUser = await prisma.user.findUnique({
      where: { id: Number(id) },
    });

    if (!targetUser) {
      return res.status(404).json({ message: "User not found." });
    }

    if (targetUser.role === "SUPER_ADMIN") {
      return res
        .status(400)
        .json({ message: "Cannot delete another super admin." });
    }

    await prisma.user.delete({ where: { id: Number(id) } });

    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
