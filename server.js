const express = require('express');
const app = express();
const port = 3000;

// Sample data
const songs = [
  { id: 1, title: "Song A", genre: "Pop", artist: "Artist 1" },
  { id: 2, title: "Song B", genre: "Rock", artist: "Artist 2" },
  { id: 3, title: "Song C", genre: "Pop", artist: "Artist 3" },
  { id: 4, title: "Song D", genre: "Jazz", artist: "Artist 4" },
];

const userRatings = {
  1: { 1: 5, 3: 3 }, // User 1 rated Song A with 5 and Song C with 3
  2: { 2: 4, 4: 2 }  // User 2 rated Song B with 4 and Song D with 2
};

app.use(express.static('public'));

app.get('/api/recommendations', (req, res) => {
  const userId = parseInt(req.query.userId, 10);
  const userRating = userRatings[userId];
  
  if (!userRating) {
    return res.status(404).json({ message: "User not found." });
  }

  // Basic recommendation: Recommend songs not yet rated by the user
  const recommendations = songs.filter(song => !userRating[song.id]);
  res.json(recommendations);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
