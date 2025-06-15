import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/authMiddleware.js";
import {
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  getAllMenuItems,
} from "../controllers/menuController.js";

const router = express.Router();

// PUBLIC
router.get("/", getAllMenuItems);

// ADMIN ONLY
router.post("/", protect, authorizeRoles("admin"), createMenuItem);
router.put("/:id", protect, authorizeRoles("admin"), updateMenuItem);
router.delete("/:id", protect, authorizeRoles("admin"), deleteMenuItem);

export default router;
