import express from "express";
import authMiddleware from "../middleware/authMiddleware.js"; // Ensure middleware is correctly imported

const router = express.Router();

// Protected route (only accessible with a valid token)
router.get("/protected", authMiddleware, (req, res) => {
    res.json({ message: "Access granted", user: req.user });
});

export default router;
