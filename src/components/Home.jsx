import React, { useEffect, useState } from "react";
import Header from "./Header";
import Movies from "./Movies";
import MovieCard from "./MovieCard";
import "../style/Home.css";
import FilterMovies from "./FilterMovies";

import axios from 'axios'


const Home = () => {

  // useState that determines if filter is open or not.
  const [isOpen, setIsOpen] = React.useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("")

  let search = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  const api = axios.create({
    baseURL: 'http://localhost:8000'
  });

  const filterDisplayChange = () => {
    setIsOpen(!isOpen);
  };

  const filteredMovies = movies.filter((movie) => {
    if (query === "") {
      return true;
    } else {
      return movie.title.toLowerCase().startsWith(query.toLowerCase());
    }
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get('/movies/');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    };
    fetchMovies();
  }, []);



  return (
    <div className="home-page">
      <Header filterDisplayChange={filterDisplayChange} />
      <div className="searchbar-container">
        <input
          type="text"
          className="searchbar-form"
          placeholder="Search movies..."
          onChange={search}
          value={query}
        />
      </div>
      <div class="display-title">Now Showing</div>
      <div className="movie-cards-container">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.title} img={movie.image} id={movie.id} />
        ))}
      </div>
      <div class="display-title">Upcoming Movies</div>      
      <FilterMovies isOpen={isOpen} filterDisplayChange={filterDisplayChange} />
    </div>
  );
};

export default Home;