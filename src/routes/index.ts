import { Router } from "express";
import departmentRoutes from "./department.routes.js";
import authRoutes from "./auth.routes.js";
import clearanceRequestRoutes from "./clearanceRequest.routes.js";
import departmentClearanceRoutes from "./departmentClearance.routes.js";

const router = Router();

router.use("/departments", departmentRoutes);
router.use("/api/auth", authRoutes);
router.use("/api/clearance", clearanceRequestRoutes);
router.use("/api/department-clearance", departmentClearanceRoutes);

export default router;
