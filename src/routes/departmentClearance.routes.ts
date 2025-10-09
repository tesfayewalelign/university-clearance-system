import { Router } from "express";
import {
  createDepartmentStatus,
  getAllDepartmentStatuses,
  getDepartmentStatusById,
  updateDepartmentStatus,
  deleteDepartmentStatus,
} from "../controllers/adminClearance.controller.js";
import { isAdmin } from "../middleware/role.middleware.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", authenticate, isAdmin, createDepartmentStatus);
router.get("/", authenticate, isAdmin, getAllDepartmentStatuses);
router.get("/:id", authenticate, isAdmin, getDepartmentStatusById);
router.put("/:id", authenticate, isAdmin, updateDepartmentStatus);
router.delete("/:id", authenticate, isAdmin, deleteDepartmentStatus);

export default router;
