import express from "express";
import { isAuthenticated } from "../middleware/auth.middleware.js";
import { getMessage, userMessage } from "../controllers/message.controller.js";

const router = express.Router()

router.post('/send/:receiverId', isAuthenticated,userMessage) 
router.get('/get-message/:getOtherParticipantId', isAuthenticated,getMessage ) 

export default router 