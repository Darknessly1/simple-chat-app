import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRouter from "../middleware/protectRouter.js";

const router = express.Router();

router.get("/:id", protectRouter ,getMessages);
router.post("/send/:id", protectRouter ,sendMessage);

export default router