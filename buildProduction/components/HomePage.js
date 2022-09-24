import {useEffect, useState} from 'react';
import axios from "axios";
import Results from './Results'
import '../styles/main.scss'

const HomePage = () => {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  let currentPage = page;

  useEffect(() => {
    requestMoviesDiscovered()
  }, [page])

  async function requestMoviesDiscovered() {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=ee6747f87f0b1852e2dc288163f344c7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    )
    const json = await res.json();

    setMovies(json.results);
  }

  const nextPage = () => {
    setPage(++currentPage);
  }

  const previousPage = () => {
    if(currentPage > 1) setPage(--currentPage);
  }
  
  return (
    <div className="home-page">
      <div className="home-banner">
        <h1>Welcome to Movie Search</h1>
      </div>
      <Results items={movies}/>
      <button onClick={() => {
        previousPage();
        }}>Left</button>
      <button onClick={() => {
        nextPage();
      }}>Right</button>
    </div>
  );
};

export default HomePage;