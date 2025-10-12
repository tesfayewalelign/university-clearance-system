import type { Request, Response } from "express";
import { signupSchema, loginSchema } from "../validators/auth.validator.js";
import prisma from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import logger from "../utils/logger.js";
import { Role } from "@prisma/client";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

export async function signup(req: Request, res: Response) {
  try {
    const parsedData = signupSchema.safeParse(req.body);
    if (!parsedData.success) {
      logger.warn("Invalid signup data received");
      return res.status(400).json({ errors: parsedData.error.issues });
    }
    const { full_name, email, password } = parsedData.data;

    const role: Role = Role.STUDENT;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      logger.info(`Signup attempt failed: Email already exists (${email})`);
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { full_name, email, password: hashedPassword, role },
    });

    logger.info(`New user registered successfully: ${email}`);
    return res
      .status(201)
      .json({ message: "User registered successfully", user });
  } catch (error: any) {
    logger.error(`Signup error: ${error.message}`);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const parsedData = loginSchema.safeParse(req.body);
    if (!parsedData.success) {
      logger.warn("Invalid login data received");
      return res.status(400).json({ errors: parsedData.error.issues });
    }

    const { email, password } = parsedData.data;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      logger.info(`Login failed: Invalid email (${email})`);
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      logger.info(`Login failed: Incorrect password for ${email}`);
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, email: user.email },
      JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    logger.info(`Login successful for user: ${email}`);
    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error: any) {
    logger.error(`Login error: ${error.message}`);
    return res.status(500).json({ message: "Server error" });
  }
}
