import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// 🔹 IMPORT ROUTES
import authRoutes from "./routes/auth.routes.js";
import videoRoutes from "./routes/video.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import channelRoutes from "./routes/channel.routes.js";

dotenv.config();
connectDB();

const app = express();

// 🔹 MIDDLEWARE
app.use(cors());
app.use(express.json());

// 🔹 REGISTER ROUTES (👇 INSERT HERE)
app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);   // ✅ THIS LINE
app.use("/api/comments", commentRoutes);
app.use("/api/channels", channelRoutes);

// 🔹 SERVER START
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
