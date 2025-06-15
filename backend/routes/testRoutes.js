import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: `Hello ${req.user.name}, you're authorized!` });
});

export default router;
