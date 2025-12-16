import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
  channelName: String,
  description: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  channelBanner: String,
  subscribers: { type: Number, default: 0 }
});

export default mongoose.model("Channel", channelSchema);
