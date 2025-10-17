import { Router } from "express";
import departmentRoutes from "./department.routes.js";
import authRoutes from "./auth.routes.js";
import clearanceRequestRoutes from "./clearanceRequest.routes.js";
import departmentClearanceRoutes from "./departmentClearance.routes.js";
import { assignDepartment } from "../controllers/student.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import userRoutes from "./user.routes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/api", departmentRoutes);
router.use("/api/auth", authRoutes);
router.use("/api/clearance", clearanceRequestRoutes);
router.use("/api/department-clearance", departmentClearanceRoutes);

router.put("/api/users/:id/assign-department", authenticate, assignDepartment);

export default router;
