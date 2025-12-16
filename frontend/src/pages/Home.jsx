import { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../components/VideoCard";

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/videos")
      .then(res => setVideos(res.data));
  }, []);

  return (
    <div className="grid">
      {videos.map(v => <VideoCard key={v._id} video={v} />)}
    </div>
  );
}
