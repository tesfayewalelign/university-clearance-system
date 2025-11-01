import { Router } from "express";
import departmentRoutes from "./department.routes.js";
import authRoutes from "./auth.routes.js";
import clearanceRequestRoutes from "./clearanceRequest.routes.js";
import departmentClearanceStatusRoutes from "./departmentClearanceStatus.routes.js";
import { authenticate } from "../middleware/auth.middleware.js";
import userRoutes from "./user.routes.js";
import studentRoutes from "../routes/student.routes.js";
import adminRoutes from "../routes/admin.routes.js";
import cors from "cors";

const router = Router();
router.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
router.use("/users", userRoutes);
router.use("/api", departmentRoutes);
router.use("/api/auth", authRoutes);
router.use("/api", clearanceRequestRoutes);
router.use("/api/department-clearance-status", departmentClearanceStatusRoutes);
router.use("/api/student", studentRoutes);
router.use("/api/admin", adminRoutes);

export default router;
