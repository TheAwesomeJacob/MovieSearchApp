import '../styles/movieStyle.scss'
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {
  const [sourceImage, setSourceImage] = useState('');
  const fullSourceImage = 'https://image.tmdb.org/t/p/w185//' + sourceImage;

  useEffect(() => {
    requestImages()
  }, [])

  async function requestImages() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${props.id}/images?api_key=ee6747f87f0b1852e2dc288163f344c7`
    )
    const json = await res.json();

    const englishPoster = json.posters.filter(poster => (poster.iso_639_1 == 'en' ? poster.file_path : ''))

    setSourceImage(!englishPoster.length ? json.posters[0].file_path : englishPoster[0].file_path)
  }
  return(
    <Link to='/movie-description' className="movie-container">
      <img src={fullSourceImage} alt="poster" />
      <div className="movie-container-description">
        <h3>{props.movieTitle}</h3>
        <p>{props.voteRaitings}</p>
        <p>{props.releaseDate}</p>
      </div>
    </Link>
  )
}

export default Movie;