import express from "express";
import Comment from "../models/Comment.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/:videoId", async (req, res) => {
  res.json(await Comment.find({ videoId: req.params.videoId }));
});

router.post("/", auth, async (req, res) => {
  await Comment.create(req.body);
  res.json({ msg: "Comment added" });
});

export default router;
