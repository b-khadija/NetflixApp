import React, { useState, useEffect } from 'react';
import './Banner.scss';
import { IoMdPlay } from 'react-icons/io';
import { BiInfoCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import requests from '../config/Request';
import QuickView from './QuickView';
import searchYouTubeTrailer from './YoutubeAPI';
import axios from 'axios';

function Banner() {
  const [movie, setMovie] = useState([]);
  const [popup, setPopUp] = useState(false);

  function handleClickPopUp() {
    setPopUp(!popup);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const randomMovie =
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ];
        setMovie(randomMovie);

        // Search for YouTube trailer based on movie title
        searchYouTubeTrailer(
          randomMovie?.title || randomMovie?.name || randomMovie?.original_title
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  function truncateText(string, n) {
    return string?.length > n
      ? string.substr(0, n - 1) + '...'
      : 'No description';
  }

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/3/t/p/original/${movie?.backdrop_path}")`,
  };

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner__content">
        <h1 className="banner__title">
          {movie.title ?? movie.original_title ?? 'Titre inconnu'}
        </h1>
        <p className="banner__description">
          {truncateText(movie.overview, 100)}
        </p>
        <div className="banner__buttons">
          <Link to={`/video/${movie?.id}`}>
            <button className="banner__button">
              <IoMdPlay /> Lecture
            </button>
          </Link>
          <button
            className="banner__button button__more"
            onClick={handleClickPopUp}
          >
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
  );
}

export default Banner;
