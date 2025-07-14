import express from "express";
import { getOtherUser, Login, Logout, Profile, Register } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";

const router = express.Router()

router.post("/register",Register)
router.post('/login', Login) 
router.get('/get-profile', isAuthenticated, Profile)
router.get('/get-other-profile', isAuthenticated, getOtherUser)
router.post('/logout', isAuthenticated, Logout )

export default router