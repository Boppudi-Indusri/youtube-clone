import express from "express";
import Video from "../models/Video.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { search, category } = req.query;
  let query = {};
  if (search) query.title = { $regex: search, $options: "i" };
  if (category) query.category = category;

  const videos = await Video.find(query);
  res.json(videos);
});

export default router;
