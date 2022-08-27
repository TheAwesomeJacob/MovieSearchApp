import '../styles/movieStyle.scss'
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {
  const fullSourceImage = 'https://image.tmdb.org/t/p/w185//' + props.posterImage;

  return(
    <Link to={`/movie-description/${props.id}`} className="movie-container">
      <div className="movie-container-description">
        <img src={fullSourceImage} alt="poster" />
        <h3>{props.movieTitle}</h3>
        <p>{props.voteRaitings}</p>
        <p>{props.releaseDate}</p>
      </div>
    </Link>
  )
}

export default Movie;