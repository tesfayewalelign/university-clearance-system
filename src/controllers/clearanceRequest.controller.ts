import type { Request, Response } from "express";
import prisma from "../config/db.js";
import logger from "../utils/logger.js";

export const createClearanceRequest = async (req: Request, res: Response) => {
  try {
    const student_id = req.user?.id;

    if (!student_id) {
      logger.warn("Unauthorized access attempt to create clearance request");
      return res.status(401).json({ message: "Unauthorized" });
    }

    const existingRequest = await prisma.clearanceRequest.findFirst({
      where: {
        student_id,
        overall_status: { in: ["pending", "approved", "rejected"] },
      },
    });

    if (existingRequest) {
      logger.info(
        `Student ID ${student_id} tried to create a duplicate clearance request`
      );
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

    logger.info(
      `Clearance request created successfully for student ID ${student_id}`
    );
    res.status(201).json({
      message: "Clearance request created successfully.",
      request: newRequest,
    });
  } catch (error: any) {
    logger.error(`Error creating clearance request: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMyClearanceRequests = async (req: Request, res: Response) => {
  try {
    const student_id = req.user?.id;

    if (!student_id) {
      logger.warn("Unauthorized access attempt to fetch clearance requests");
      return res.status(401).json({ message: "Unauthorized" });
    }

    const requests = await prisma.clearanceRequest.findMany({
      where: { student_id },
      orderBy: { createdAt: "desc" },
    });

    logger.info(`Fetched clearance requests for student ID ${student_id}`);
    res.status(200).json({
      message: "Your clearance requests fetched successfully.",
      requests,
    });
  } catch (error: any) {
    logger.error(`Error fetching clearance requests: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
