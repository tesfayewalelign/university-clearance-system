import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import { getAllClearanceRequests } from "../controllers/admin.controller.js";

const router = Router();

router.use(authenticate);

router.get("/clearanceRequests", getAllClearanceRequests);

export default router;
