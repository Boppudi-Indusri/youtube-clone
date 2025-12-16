import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function VideoPlayer() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/comments/${id}`)
      .then(res => setComments(res.data));
  }, []);

  return (
    <div>
      <video controls width="600">
        <source src="https://example_video.com" />
      </video>

      <h3>Comments</h3>
      {comments.map(c => <p key={c._id}>{c.text}</p>)}
    </div>
  );
}
