import express from "express";
import * as departmentController from "../controllers/ department.controller.js";

import { isAdmin } from "../middleware/role.middleware.js";
import { authenticate } from "../middleware/auth.middleware.js";
import {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
} from "../controllers/ department.controller.js";

const router = express.Router();

router.post("/createDepartment", authenticate, isAdmin, createDepartment);
router.get("/ getDepartments", getAllDepartments);
router.get("/getDepartmentById/:id", getDepartmentById);
router.put("/ updateDepartment/:id", authenticate, isAdmin, updateDepartment);
router.delete(
  "/ deleteDepartment/:id",
  authenticate,
  isAdmin,
  deleteDepartment
);

export default router;
