import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";


export default function VideoPlayer() {
  const { id } = useParams();        // video id from URL
  const [video, setVideo] = useState(null);

  // 🔹 Fetch video details
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/videos/${id}`)
      .then(res => setVideo(res.data));
  }, [id]);

  // ⛔ Prevent crash before data loads
  if (!video) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      
      {/* 🎥 VIDEO PLAYER */}
      <iframe
        width="100%"
        height="400"
        src={video.videoUrl}
        title={video.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>

      {/* 📌 VIDEO DETAILS */}
      <h2>{video.title}</h2>
      <p>{video.channelName}</p>

      {/* 👍👎 LIKE / DISLIKE BUTTONS */}
      <div style={{ margin: "10px 0" }}>
        <button
          onClick={async () => {
            const res = await axios.put(
              `http://localhost:5000/api/videos/${id}/like`
            );
            setVideo(res.data);
          }}
        >
          👍 {video.likes}
        </button>

        <button
          style={{ marginLeft: "10px" }}
          onClick={async () => {
            const res = await axios.put(
              `http://localhost:5000/api/videos/${id}/dislike`
            );
            setVideo(res.data);
          }}
        >
          👎 {video.dislikes}
        </button>
      </div>

    </div>
  );
}
