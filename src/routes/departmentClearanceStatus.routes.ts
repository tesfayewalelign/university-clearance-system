import express from "express";
import {
  getPendingRequestsForDepartment,
  updateDepartmentStatus,
} from "../controllers/departmentClearanceStatus.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/pending", authenticate, getPendingRequestsForDepartment);

router.patch("/:id", authenticate, updateDepartmentStatus);

export default router;
