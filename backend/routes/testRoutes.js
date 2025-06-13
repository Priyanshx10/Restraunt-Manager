import express from "express";
import { hello } from "../controllers/testController.js"; // ✅ include .js

const router = express.Router();

router.get("/", hello);

export default router;
