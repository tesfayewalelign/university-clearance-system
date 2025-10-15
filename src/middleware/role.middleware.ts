import type { Request, Response, NextFunction } from "express";

export function isAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const role = req.user.role.toLowerCase();
  if (role !== "admin" && role !== "super_admin") {
    return res.status(403).json({ message: "Forbidden: Admins only" });
  }

  next();
}
