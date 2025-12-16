await Video.insertMany([
  {
    title: "Learn React in 30 Minutes",
    thumbnailUrl: "https://img.youtube.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    channelName: "Code with John",
    views: 15200,
    category: "Education",

    // ✅ INSERT HERE
    likes: 1023,
    dislikes: 45
  }
]);
