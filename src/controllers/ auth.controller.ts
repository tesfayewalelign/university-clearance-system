import type { Request, Response } from "express";
import prisma from "../config/db.js";
import { hashPassword, comparePasswords } from "../utils/password.js";
import { signJwt } from "../utils/jwt.js";

export async function signup(req: Request, res: Response) {
  try {
    const { full_name, email, password } = req.body;
    if (!full_name || !email || !password) {
      return res
        .status(400)
        .json({ message: "fullName, email and password are required" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing)
      return res.status(409).json({ message: "Email already in use" });

    const hashed = await hashPassword(password);
    const user = await prisma.user.create({
      data: { full_name, email, password: hashed, role: "student" },
      select: {
        id: true,
        full_name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    const token = signJwt({ userId: user.id });

    return res.status(201).json({ user, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "email and password required" });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = signJwt({ userId: user.id });

    const safeUser = {
      id: user.id,
      fullName: user.full_name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    };

    return res.json({ user: safeUser, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}
