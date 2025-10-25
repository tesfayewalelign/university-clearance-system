import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import { getUserById } from "../controllers/user.controller.js";
import { getAllUsers } from "../controllers/user.controller.js";
import { deleteUser } from "../controllers/user.controller.js";
const router = Router();

router.get("/getAllUsers", authenticate, getAllUsers);
router.get("/getUserById/:id", authenticate, getUserById);
router.delete("/deleteUser/:id", authenticate, deleteUser);

export default router;
