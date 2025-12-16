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
// LIKE
router.put("/:id/like", async (req, res) => {
  const video = await Video.findById(req.params.id);
  video.likes += 1;
  await video.save();
  res.json(video);
});

// DISLIKE
router.put("/:id/dislike", async (req, res) => {
  const video = await Video.findById(req.params.id);
  video.dislikes += 1;
  await video.save();
  res.json(video);
});


export default router;
