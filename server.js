import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";
import protectedRoutes from "./routes/protectedRoute.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", protectedRoutes);
app.use("/api/auth", authRoutes);

// ✅ Add a default route
app.get("/", (req, res) => {
    res.send("Welcome to the Campus Navigation Backend!");
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

