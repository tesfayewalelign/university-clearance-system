import type { Request, Response } from "express";
import prisma from "../config/db.js";
import bcrypt from "bcrypt";
import { Role } from "@prisma/client";
import { generateRandomPassword } from "../utils/password.js";
import jwt from "jsonwebtoken";

export const createUserByAdmin = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized: user not found" });
    }

    const adminRole = req.user.role;

    if (adminRole !== "ADMIN" && adminRole !== "SUPER_ADMIN") {
      return res.status(403).json({ message: "Unauthorized to create users" });
    }

    const { full_name, email, role } = req.body;

    const tempPassword = generateRandomPassword(10);
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    const user = await prisma.user.create({
      data: {
        full_name,
        email,
        role: role as Role,
        password: hashedPassword,
        isTempPassword: true,
      },
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        tempPassword,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid credentials" });

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error("JWT_SECRET is missing in .env");
      return res.status(500).json({ message: "Server misconfiguration" });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, secret, {
      expiresIn: "7d",
    });

    if (user.isTempPassword && user.role !== "SUPER_ADMIN") {
      return res.status(200).json({
        message: "Login successful. Please change your password.",
        firstLogin: true,
        role: user.role,
        token,
      });
    }

    return res.status(200).json({
      message: "Login successful",
      firstLogin: false,
      role: user.role,
      token,
    });
  } catch (error: any) {
    console.error("Login error:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function changePassword(req: Request, res: Response) {
  const userId = req.body.id;
  const { oldPassword, newPassword } = req.body;

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return res.status(404).json({ message: "User not found" });

  const valid = await bcrypt.compare(oldPassword, user.password);
  if (!valid)
    return res.status(400).json({ message: "Incorrect old password" });

  const hashedNew = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { id: userId },
    data: {
      password: hashedNew,
      isTempPassword: false,
    },
  });

  res.json({ message: "Password changed successfully" });
}
