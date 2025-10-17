import { Router } from "express";
import { createUserByAdmin, login } from "../controllers/ auth.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { changePassword } from "../controllers/ auth.controller.js";

const router = Router();

router.post("/signup", createUserByAdmin);
router.post("/login", login);

router.patch("/changePassword", changePassword);
router.post("/createUserByAdmin", authenticate, createUserByAdmin);
router.post("/login", login);

export default router;
