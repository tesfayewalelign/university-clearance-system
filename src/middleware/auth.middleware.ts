import type { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt.js";
import prisma from "../config/db.js";
import logger from "../utils/logger.js";

declare module "express-serve-static-core" {
  interface Request {
    user?: {
      id: number;
      email: string;
      role: string;
    };
  }
}

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
      logger.warn("Authorization header missing or malformed");
      return res
        .status(401)
        .json({ message: "Authorization header missing or malformed" });
    }

    const token = header.split(" ")[1];
    if (!token) {
      logger.warn("Token missing in authorization header");
      return res.status(401).json({ message: "Token missing" });
    }
    const payload = verifyJwt<{ id: number; role: string }>(token);

    if (!payload?.id || !payload?.role) {
      logger.warn("Invalid JWT payload");
      return res.status(401).json({ message: "Invalid token payload" });
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: { id: true, email: true, role: true },
    });

    if (!user) {
      logger.warn(`User not found for token userId: ${payload.id}`);
      return res.status(401).json({ message: "User not found" });
    }

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    logger.info(`Authenticated user: ${user.email} (Role: ${user.role})`);
    next();
  } catch (error: any) {
    logger.error(
      `JWT verific const role: Role = roleStr as Role;ation failed: ${error.message}`
    );
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
