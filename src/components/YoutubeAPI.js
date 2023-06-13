import axios from 'axios';

async function searchYouTubeTrailer(title) {
  try {
    // Perform a GET request to the YouTube Data API
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: 'AIzaSyB8o2Eb0UufmW9bf9bZu_eY21wQMvwqrD4',
        part: 'snippet',
        q: `${title} bande annonce`,
        maxResults: 1,
        type: 'video',
      },
    });

    // Check if videos were found
    if (response.data.items.length > 0) {
      const videoId = response.data.items[0].id.videoId;
      const videoEmbedCode = `<iframe src="https://www.youtube.com/embed/${videoId}" title="YouTube Video Player" frameborder="0" allowfullscreen></iframe>`;
      console.log('Video found on YouTube. Video ID:', videoId);
      console.log('Embedded video code:', videoEmbedCode);
      // Display the embedded video code on the page
      document.getElementById('video-container').innerHTML = videoEmbedCode;
    } else {
      console.log('No video found on YouTube for the film:', title);
    }
  } catch (error) {
    console.error('Error searching for video on YouTube:', error);
  }
}

export default searchYouTubeTrailer;
