import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import {
  getMyClearanceStatus,
  getStudentDashboard,
  getStudentProfile,
  updateClearanceStatus,
} from "../controllers/student.controller.js";
import { verify } from "crypto";

const router = Router();

router.use(authenticate);

router.get("/clearanceStatus", getMyClearanceStatus);

router.get("/dashboard", getStudentDashboard);
router.get("/profile", getStudentProfile);
router.put("/update", authenticate, updateClearanceStatus);

export default router;
