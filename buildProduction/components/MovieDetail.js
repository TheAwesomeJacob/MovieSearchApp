import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';

const MovieDetail = () => {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState();
  const [movieScore, setMovieScore] = useState([]);
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

    let reviewScore = {
      score: json.vote_average.toString(),
      scoreColor: ''
    };
    reviewScore.score = reviewScore.score.split('').slice(0, 3).join('');
    if(reviewScore.score)
      if(Number(reviewScore.score) > 7){
        reviewScore.scoreColor = 'good';
      } else if(Number(reviewScore.score) > 5 && Number(reviewScore.score) <= 7 ) {
        reviewScore.scoreColor = 'avarage';
      } else {
        reviewScore.scoreColor = 'bad';
      }
    else{
      reviewScore.score = '-';
    }

    setMovieScore(reviewScore);
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
            <div className='movie-detail-title-score'>
              <span className="movie-detail-title">{movieDetail.title}</span>
              <span className={`movie-detail-score ${movieScore.scoreColor}`}>{movieScore.score}</span>
            </div>
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