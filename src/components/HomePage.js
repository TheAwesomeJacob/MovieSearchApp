import {useEffect, useState} from 'react';
import axios from "axios";
import Results from './Results'
import '../styles/main.scss'

const HomePage = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    requestCities()
  }, [])

    async function requestCities() {
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=ee6747f87f0b1852e2dc288163f344c7'
      )
      const json = await res.json();

      setMovies(json.results);
    }
    
  return (
    <div>
      <div className="home-banner">
        <h1>Welcome to Movie Search</h1>
      </div>
      <Results items={movies}/>
    </div>
  );
};

export default HomePage;