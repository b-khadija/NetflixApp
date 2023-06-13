import React from 'react';
import './QuickView.scss';
import { AiFillCloseCircle } from 'react-icons/ai';

function QuickView({bannerStyle, movie, popup, popUpStatut}) {
  return (
    <div className={`quickView ${popUpStatut && "open"}`}>
      <div className='quickView__banner' style={bannerStyle}>
        <div className='quickView__content'>
        <h3 className="quickView__title">
            {movie?.title || movie?.name || movie?.original_title}
        </h3>
        <p>{movie?.overview}</p>
        </div>
        <button className='quickView__close' onClick={popup}>
          <AiFillCloseCircle size={35}/>
        </button>
      </div>
    </div>
  )
}

export default QuickView;
//API YOUTUBE
//AIzaSyDbuDzpz6_UbtQSvi7Xxesnu8kBJzz9Si8