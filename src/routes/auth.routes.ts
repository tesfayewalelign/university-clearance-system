import { Router } from "express";
import { createUserByAdmin, login } from "../controllers/ auth.controller.js";

const router = Router();

router.post("/signup", createUserByAdmin);
router.post("/login", login);

export default router;
