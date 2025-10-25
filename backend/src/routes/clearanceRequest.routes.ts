import express from "express";
import {
  createClearanceRequest,
  getMyClearanceRequests,
  getClearanceRequestById,
  deleteClearanceRequest,
  getAllClearanceRequests,
} from "../controllers/clearanceRequest.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createClearanceRequest", authenticate, createClearanceRequest);
router.get("/getMyClearanceRequests", getMyClearanceRequests);
router.get("/getClearanceRequestById/:id", getClearanceRequestById);
router.get("/getAllClearanceRequests", getAllClearanceRequests);
router.delete("/deleteClearanceRequest", deleteClearanceRequest);

export default router;
