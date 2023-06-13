import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import './Video.scss';
import axios from 'axios';
import Row from './Row';

function Video() {
  let { id } = useParams();

  useEffect(() => {
    // Search for YouTube trailer based on the movie ID
    searchYouTubeTrailer(id);
  }, [id]);

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
        console.log('Video found on YouTube. Video ID:', videoId);
      } else {
        console.log('No video found on YouTube for the film:', title);
      }
    } catch (error) {
      console.error('Error searching for video on YouTube:', error);
    }
  }

  return (
    <div className="video">
      <Row title="Title" url="URL" isPoster={true} handleImageClick={searchYouTubeTrailer} />
    </div>
  );
}

export default Video;
