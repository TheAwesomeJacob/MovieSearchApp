import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';

const MovieDetail = () => {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState();
  const [movieImages, setMovieImages] = useState();

  useEffect(() => {
    requestMoviesDetails();
    requestMoviesImages();
  }, [])

  async function requestMoviesDetails() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=ee6747f87f0b1852e2dc288163f344c7&language=en-US`
    )
    const json = await res.json();

    setMovieDetail(json);
  }

  async function requestMoviesImages() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/images?api_key=ee6747f87f0b1852e2dc288163f344c7&language=en-US&include_image_language=en`
    )
    const json = await res.json();

    setMovieImages(json);
  }

  return(
    <div className="movie-detail">
      <div className="black-banner"></div>
      {
        !movieDetail ? (
          <h1>
            Loading
          </h1>
        ) : (
          <div className="movie-detail-wrapper">
            <img className='movie-detail-backdrop-image' src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`} />
            <span className="movie-detail-title">{movieDetail.original_title}</span>
            <section className="movie-detail-description">
              <div></div>
            </section>
          </div>
        )
      }
    </div>
  )
}

export default MovieDetail;