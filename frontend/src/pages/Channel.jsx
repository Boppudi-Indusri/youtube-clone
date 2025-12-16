import axios from "axios";
import { useState } from "react";

export default function Channel() {
  const [name, setName] = useState("");

  const createChannel = async () => {
    await axios.post(
      "http://localhost:5000/api/channels",
      { channelName: name },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    alert("Channel Created");
  };

  return (
    <div>
      <h2>Create Channel</h2>
      <input onChange={e => setName(e.target.value)} />
      <button onClick={createChannel}>Create</button>
    </div>
  );
}
