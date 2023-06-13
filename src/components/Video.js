import React from 'react';
import { useParams } from 'react-router';
import './Video.scss';

function Video() {
  let { id } = useParams();
  //https://www.themoviedb.org/movie/550-fight-club#play=tZpXdiB_pg0
  //https://api.themoviedb.org/3/movie/157336/videos?api_key=584c23b365d64166b0051e1dfe1ad3fb
  //const videoUrl = `https://www.youtube.com/watch?${id}`;
  const api_key = '41c3dd562a7766ccae1b24e1f051dcf2'; 
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`;
  console.log(id);

  return (
    <div className='video'>
      <iframe
      src={videoUrl}
      title='Bande annonce'
      allowFullScreen
      >
      </iframe>
    </div>
  );
}

export default Video;