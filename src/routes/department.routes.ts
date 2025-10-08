import express from "express";
import * as departmentController from "../controllers/ department.controller.js";

import { isAdmin } from "../middleware/role.middleware.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", departmentController.getDepartments);

router.post("/", authenticate, isAdmin, departmentController.createDepartment);
router.put(
  "/:id",
  authenticate,
  isAdmin,
  departmentController.updateDepartment
);
router.delete(
  "/:id",
  authenticate,
  isAdmin,
  departmentController.deleteDepartment
);

export default router;
