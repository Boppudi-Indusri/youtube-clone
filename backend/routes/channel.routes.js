import express from "express";
import Channel from "../models/Channel.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// CREATE channel
router.post("/", auth, async (req, res) => {
  const channel = await Channel.create({
    ...req.body,
    owner: req.user.id
  });
  res.json(channel);
});

// READ channel
router.get("/:id", async (req, res) => {
  const channel = await Channel.findById(req.params.id);
  res.json(channel);
});

// UPDATE channel
router.put("/:id", auth, async (req, res) => {
  const channel = await Channel.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.json(channel);
});

// DELETE channel
router.delete("/:id", auth, async (req, res) => {
  await Channel.findByIdAndDelete(req.params.id);
  res.json({ msg: "Channel deleted" });
});

export default router;
