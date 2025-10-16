import { Router } from "express";
import departmentRoutes from "./department.routes.js";
import authRoutes from "./auth.routes.js";
import clearanceRequestRoutes from "./clearanceRequest.routes.js";
import departmentClearanceRoutes from "./departmentClearance.routes.js";
import { assignDepartment } from "../controllers/student.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { createUserByAdmin } from "../controllers/ auth.controller.js";
import { login } from "../controllers/ auth.controller.js";
import { isAdmin } from "../middleware/role.middleware.js";
import { changePassword } from "../controllers/ auth.controller.js";

const router = Router();

router.use("/departments", departmentRoutes);
router.use("/api/auth", authRoutes);
router.use("/api/clearance", clearanceRequestRoutes);
router.use("/api/department-clearance", departmentClearanceRoutes);
router.put("/api/users/:id/assign-department", authenticate, assignDepartment);
router.post("/createUserByAdmin", authenticate, createUserByAdmin);
router.post("/login", login);
router.patch("/changePassword", changePassword);

export default router;
