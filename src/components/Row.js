import React from 'react';
import './Row.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Row.scss';

function Row({title, url, isPoster}) {
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    // Fonction asynchrone pour récupérer les données des films tendances
    async function fetchData() {
      // Effectuer une requête GET à l'API TMDB pour les films tendances
      const request = await axios.get(url);
      // Sélectionner un film aléatoire parmi les résultats de la requête et le stocker dans l'état movie
      setMovies(request.data.results);
    }
    // Appeler la fonction fetchData une fois, lors du montage du composant (argument vide [])
    fetchData();
  }, [url]);
  console.log(movies);

  return (
    <div className='row'>
      <h2 className='row__title'>{title}</h2>
      <div className='row__images'>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/video/${movie.id}`}>
              <img
                //isPoster est true alors movie.poster_path est utilisé comme chemin de l'image. 
                //Sinon, si isPoster est false, alors movie.backdrop_path est utilisé comme chemin de l'image.
                src={`${baseUrl}${isPoster ? movie.poster_path ?? '' : movie.backdrop_path ?? ''}`}
                className='row__image'
                // Titre est disponible ?? Sinon titre original ??
                // Si pas de titre disponible, affichez "Titre inconnu"
                alt={movie.title ?? movie.original_title ?? 'Titre inconnu'}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Row;