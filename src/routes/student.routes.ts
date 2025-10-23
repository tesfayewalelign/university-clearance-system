import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import {
  getMyClearanceStatus,
  getStudentDashboard,
} from "../controllers/student.controller.js";

const router = Router();

router.use(authenticate);

router.get("/clearanceStatus", getMyClearanceStatus);

router.get("/dashboard", getStudentDashboard);

export default router;
