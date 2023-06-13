import React from 'react';
import './Row.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Row.scss';

function Row({ title, url, isPoster }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fonction asynchrone pour récupérer les données des films tendances
    async function fetchData() {
      try {
        // Effectuer une requête GET à l'API TMDB pour les films tendances
        const request = await axios.get(url);
        // Sélectionner un film aléatoire parmi les résultats de la requête et le stocker dans l'état movies
        setMovies(request.data.results);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    }

    // Appeler la fonction fetchData une fois, lors du montage du composant (argument vide [])
    fetchData();
  }, [url]);

  async function searchYouTubeTrailer(title) {
    try {
      // Effectuer une requête GET à l'API YouTube pour rechercher la bande-annonce correspondant au titre
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: 'AIzaSyB8o2Eb0UufmW9bf9bZu_eY21wQMvwqrD4',
          part: 'snippet',
          q: `${title} bande annonce`,
          maxResults: 1,
          type: 'video',
        },
      });

      // Vérifier si des vidéos ont été trouvées
      if (response.data.items.length > 0) {
        const videoId = response.data.items[0].id.videoId;
        console.log('Video found on YouTube. Video ID:', videoId);
        // Rediriger vers la vidéo YouTube en utilisant l'ID de la vidéo
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
      } else {
        console.log('No video found on YouTube for the film:', title);
      }
    } catch (error) {
      console.error('Error searching for video on YouTube:', error);
    }
  }

  return (
    <div className='row'>
      <h2 className='row__title'>{title}</h2>
      <div className='row__images'>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`${baseUrl}${isPoster ? movie.poster_path ?? '' : movie.backdrop_path ?? ''}`}
              className='row__image'
              alt={movie.title ?? movie.original_title ?? 'Titre inconnu'}
              onClick={() => searchYouTubeTrailer(movie.title || movie.original_title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
