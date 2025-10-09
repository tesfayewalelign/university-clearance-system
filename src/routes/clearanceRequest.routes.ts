import express from "express";
import {
  createClearanceRequest,
  getMyClearanceRequests,
} from "../controllers/clearanceRequest.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, createClearanceRequest);
router.get("/me", authenticate, getMyClearanceRequests);

export default router;
