import type { Request, Response } from "express";
import prisma from "../config/db.js";
import { hashPassword, comparePasswords } from "../utils/password.js";
import { signJwt } from "../utils/jwt.js";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isStrongPassword(password: string): boolean {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

function isValidFullName(name: string): boolean {
  const nameRegex = /^[A-Za-z\s]{3,}$/;
  return nameRegex.test(name);
}

export async function signup(req: Request, res: Response) {
  try {
    const { full_name, email, password, role } = req.body;
    if (!full_name || !email || !password || !role) {
      return res
        .status(400)
        .json({ message: "Full name, email,  password and role are required" });
    }
    if (!isValidFullName(full_name)) {
      return res
        .status(400)
        .json({ message: "Full name must contain only letters and spaces" });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    if (!isStrongPassword(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
      });
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

    return res
      .status(201)
      .json({ message: "User registered successfully", user, token });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = signJwt({ userId: user.id });

    const safeUser = {
      id: user.id,
      full_name: user.full_name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    };

    return res.json({ message: "Login successful", user: safeUser, token });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        full_name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
    return res.json(users);
  } catch (err) {
    console.error("Get all users error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        full_name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json(user);
  } catch (err) {
    console.error("Get user error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { full_name, email, password } = req.body;

    const data: any = {};
    if (full_name) {
      if (!isValidFullName(full_name))
        return res.status(400).json({ message: "Invalid full name" });
      data.full_name = full_name;
    }
    if (email) {
      if (!isValidEmail(email))
        return res.status(400).json({ message: "Invalid email" });
      data.email = email;
    }
    if (password) {
      if (!isStrongPassword(password))
        return res.status(400).json({ message: "Weak password" });
      data.password = await hashPassword(password);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        full_name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return res.json({ message: "User updated", user: updatedUser });
  } catch (err) {
    console.error("Update user error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    await prisma.user.delete({ where: { id } });
    return res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Delete user error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
