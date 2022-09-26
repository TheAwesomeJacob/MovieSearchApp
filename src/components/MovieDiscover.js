import {useEffect, useState} from 'react';
import axios from "axios";
import Results from './Results';
import '../styles/main.scss';
import '../styles/paginationStyle.scss'
import Pagination from './Pagination';

const MovieDiscover = () => {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  let currentPage = page;
  let leftArrowVisible = 'arrow-left-hidden';
  let rightArrowVisible = 'arrow-right-visible';

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
    rightArrowVisible = currentPage === totalPages ? 'arrow-right-hidden' : 'arrow-right-visible';
  }

  const previousPage = () => {
    if(currentPage > 1) setPage(--currentPage);
    leftArrowVisible = currentPage === 1 ? 'arrow-left-hidden' : 'arrow-left-visible';
  }
  
  return (
    <div className="home-page">
      <div className="home-banner">
        <h1>Welcome to Movie Ocean</h1>
      </div>
      <Results items={movies}/>
      <div className='pagination'>
        <button className={leftArrowVisible} onClick={() => { previousPage() }}>&lt;</button>
        <Pagination totalPages={totalPages} />
        <button className={rightArrowVisible} onClick={() => { nextPage() }}>&gt;</button>
      </div>
    </div>
  );
};

export default HomePage;