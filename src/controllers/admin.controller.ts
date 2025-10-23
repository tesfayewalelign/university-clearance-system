import type { Request, Response } from "express";
import prisma from "../config/db.js";

export const getAllClearanceRequests = async (req: Request, res: Response) => {
  try {
    const requests = await prisma.clearanceRequest.findMany({
      include: {
        student: { select: { full_name: true, email: true } },
        departmentStatuses: { include: { department: true } },
      },
    });
    res.status(200).json({
      message: "All clearance requests with statuses",
      count: requests.length,
      data: requests,
    });
  } catch (error) {
    console.error("Error fetching clearance requests:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
