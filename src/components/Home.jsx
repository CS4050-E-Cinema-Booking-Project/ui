import React, { useEffect, useState } from "react";
import Header from "./Header";
import Movies from "./Movies";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import "../style/Home.css";
import FilterMovies from "./FilterMovies";

import axios from 'axios'


const Home = () => {

  const movieImgArray = [
    "https://media-cache.cinematerial.com/p/500x/aihxxxyp/shrek-2-dvd-movie-cover.jpg?v=1456245175",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/549af980-f98e-4b3f-9f9f-9f91292f5b5b/dfy0nsa-7fa7c177-b6bd-49b3-86db-4264c85b80ba.png/v1/fill/w_900,h_1275,q_80,strp/shrek_2_uphe_dvd_cover_by_smashupmashups_dfy0nsa-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3NSIsInBhdGgiOiJcL2ZcLzU0OWFmOTgwLWY5OGUtNGIzZi05ZjlmLTlmOTEyOTJmNWI1YlwvZGZ5MG5zYS03ZmE3YzE3Ny1iNmJkLTQ5YjMtODZkYi00MjY0Yzg1YjgwYmEucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.h2P5ocNsGif5Rt9z1rmsge57PsUYOiJaJ9xXay5y0fU",
    "https://m.media-amazon.com/images/I/81PyIFHNiOL._AC_UF894,1000_QL80_.jpg",
    "https://i.discogs.com/pqMOjNt3RsoncdwOV0ObeFe-Z_3AxI7QiCloB4LKaGE/rs:fit/g:sm/q:90/h:600/w:386/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1MDE0/MTA2LTE1ODU1MDU3/NTQtMjMzMS5qcGVn.jpeg",
    "https://i.ebayimg.com/images/g/CKQAAOxy~iJQ9z2J/s-l1200.webp",
    "https://m.media-amazon.com/images/I/81ml6KjL31L._AC_UF894,1000_QL80_.jpg",
    "https://i5.walmartimages.com/asr/e3952bd2-2fbd-47be-b782-576322f797f3.b184610023461f1acbbd19117efdbf2b.jpeg",
    "https://originalvintagemovieposters.com/wp-content/uploads/2010/06/Shrek1.jpg",
    "https://i.ebayimg.com/images/g/Pc8AAOSwWBth9cf2/s-l1200.webp",
    "https://img.buzzfeed.com/buzzfeed-static/complex/images/gdv2pu6io6ekpg5r8mta/back-to-the-future.jpg?output-format=jpg&output-quality=auto",
    "https://m.media-amazon.com/images/I/91WlTjCgu4L._AC_UF894,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/71x1RHSaEhL._AC_UF894,1000_QL80_.jpg",
    "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/268821/4556789/apiihy1mm__31528.1625622408.jpg?c=2",
    "https://filmartgallery.com/cdn/shop/products/Avengers-Infinity-War-Vintage-Movie-Poster-Original-1-Sheet-27x41_3598eaae-2806-4429-986b-218cc4f08b73.jpg?v=1670360455",
    "https://media.harrypotterfanzone.com/philosophers-stone-20-years-of-movie-magic-ron-poster.jpg",
    "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
    "https://www.tfw2005.com/boards/attachments/28475148/",
    "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
    "https://i.etsystatic.com/27725708/r/il/008c5a/2904647259/il_fullxfull.2904647259_ilg7.jpg"
  ];

  // useState that determines if filter is open or not.
  const [isOpen, setIsOpen] = React.useState(false);
  const [movies, setMovies] = useState([]);

  const api = axios.create({
    baseURL: 'http://localhost:8000'
  });

  const filterDisplayChange = () => {
    setIsOpen(!isOpen);
  };

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
        <SearchBar />
      <div className="movie-cards-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} img={movie.image} />
        ))}
      </div>
      <FilterMovies isOpen={isOpen} filterDisplayChange={filterDisplayChange} />
    </div>
  );
};

export default Home;