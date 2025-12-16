const videoSchema = new mongoose.Schema({
  title: String,
  thumbnailUrl: String,
  videoUrl: String,
  channelName: String,
  views: Number,
  category: String,

  // ✅ LIKE / DISLIKE FIELDS
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 }
});

