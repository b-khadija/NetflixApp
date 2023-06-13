import { useState, useEffect } from 'react';
import './Banner.scss';
import { IoMdPlay } from 'react-icons/io';
import { BiInfoCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import requests from '../config/Request';
import axios from 'axios';
import QuickView from './QuickView';

function Banner() {
  // Variable d'état movie qui a une valeur initiale vide [], qui stockera et mettre à jour les données de l'API
  // 'useState' retourne un tableau qui permet de mettre à jour la fonction setMovie et créée un nouvel état 
  const [movie, setMovie] = useState([]);
  const [popup, setPopUp] = useState(false);

  function handleClickPopUp() {
    popup ? setPopUp(false) : setPopUp(true);
  }

  useEffect(() => {
    // Fonction asynchrone pour récupérer les données des films tendances
    async function fetchData() {
      // Effectuer une requête GET à l'API TMDB pour les films tendances
      const request = await axios.get(requests.fetchNetflixOriginals);
      // Sélectionner un film aléatoire parmi les résultats de la requête et le stocker dans l'état movie
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    // Appeler la fonction fetchData une fois, lors du montage du composant (argument vide [])
    fetchData();
  }, []);
  console.log(popup);

  function truncateText(string, n) {
    // Vérifier si la chaîne est définie (éviter les erreurs si la chaîne est null ou undefined)
    return string?.length > n 
      ? string.substr(0, n - 1) + "..."  // Si la chaîne dépasse la limite, tronquer et ajouter "..."
      : "No description";  // Sinon, renvoyer la valeur par défaut "No description"
  }

  //backdrop_path : "/qGQf2OHIkoh89K8XeKQzhxczf96.jpg"
  //poster_path : "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg"

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/3/t/p/original/${movie?.backdrop_path}")`,
  };

  // Afficher les données du film dans la bannière
  return (
    <header className='banner' style={bannerStyle}>
      <div className='banner__content'>
        <h1 className='banner__title'>
        {/* Affiche le titre du film s'il existe (attribut "title" du film)
        Sinon, affiche le titre original du film s'il existe (attribut "original_title" du film)
        Si les deux attributs sont absents, affiche "Titre inconnu" */}
          {movie.title ?? movie.original_title ?? 'Titre inconnu'}
        </h1>
        <p className='banner__description'>
          {truncateText(movie.overview, 100)}
        </p>
        <div className='banner__buttons'>
          <Link to={`/video/${movie?.id}`}>
            <button className='banner__button'>
              <IoMdPlay /> Lecture
            </button>
          </Link>
          <button className='banner__button button__more' onClick={handleClickPopUp}>
            <BiInfoCircle /> Plus d'infos
          </button>
        </div>
      </div>
      <QuickView
      bannerStyle={bannerStyle} 
      movie={movie}
      popup={handleClickPopUp}
      popUpStatut={popup}
      />
    </header>
  )
}

export default Banner;