import type { Request, Response } from "express";
import prisma from "../config/db.js";

export const createClearanceRequest = async (req: Request, res: Response) => {
  try {
    const student_id = req.user?.id;

    if (!student_id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const existingRequest = await prisma.clearanceRequest.findFirst({
      where: {
        student_id,
        overall_status: { in: ["pending", "approved", "rejected"] },
      },
    });

    if (existingRequest) {
      return res.status(400).json({
        message: "You already have an active clearance request.",
      });
    }

    const newRequest = await prisma.clearanceRequest.create({
      data: {
        student_id,
        overall_status: "pending",
      },
    });

    res.status(201).json({
      message: "Clearance request created successfully.",
      request: newRequest,
    });
  } catch (error) {
    console.error("Error creating clearance request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMyClearanceRequests = async (req: Request, res: Response) => {
  try {
    const student_id = req.user?.id;

    if (!student_id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const requests = await prisma.clearanceRequest.findMany({
      where: { student_id },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({
      message: "Your clearance requests fetched successfully.",
      requests,
    });
  } catch (error) {
    console.error("Error fetching clearance requests:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
