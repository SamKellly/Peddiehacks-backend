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
  
  function recommendSongs(userId) {
    const userRating = userRatings[userId];
    
    if (!userRating) {
      console.log("User not found.");
      return [];
    }
  
    // Basic recommendation based on rating: recommend songs not yet rated by the user
    return songs.filter(song => !userRating[song.id]);
  }
  
  function showRecommendations() {
    const userId = 1; // For demonstration, we're using User 1
    const recommendations = recommendSongs(userId);
  
    let html = `<h2>Recommended Songs for User ${userId}:</h2><ul>`;
    recommendations.forEach(song => {
      html += `<li>${song.title} by ${song.artist} (Genre: ${song.genre})</li>`;
    });
    html += `</ul>`;
  
    document.getElementById('recommendations').innerHTML = html;
  }
  