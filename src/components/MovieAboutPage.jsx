import React, { useEffect, useState } from "react";
import axios from "axios";
import '../style/MovieAboutPage.css'
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from 'react-player/youtube';


const MovieAboutPage = () => {
    const navigate = useNavigate();

    const bookMovieTicketHandler = () => {
        navigate(`/purchase-tickets/${id}`)
    }

    const {id} = useParams();
    console.log({id})

    const [selectedMovie, setSelectedMovie] = useState([]);
  
    const api = axios.create({
      baseURL: 'http://localhost:8000'
    });
  
    useEffect(() => {
      const fetchMovie = async () => {
        try {
          const response = await api.get('/movies/');
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].id == id) {
                setSelectedMovie(response.data[i]);
            }
          }
        } catch (error) {
          console.error('Error fetching movies:', error)
        }
      };
      fetchMovie();
    }, []);

    
    return (
        <div className="movie-details">
        <div className="movie-image">
          <img src={selectedMovie.image} alt="Movie" />
        </div>
        <div className="movie-info">
          <h1 className="movie-title">{selectedMovie.title}</h1>
          <p className="movie-description">{selectedMovie.description}</p>
          <div className="movie-genre">
            Genre: {selectedMovie.genre}
          </div>
          <div className="movie-actors">
            Actors: Shrek, Donkey
          </div>
          <div className="movie-director">
            Director: {selectedMovie.director}
          </div>
          <div className="movie-trailer"><ReactPlayer url={selectedMovie.trailer} width="560px" height="315px" /></div>
          <button onClick={bookMovieTicketHandler} className="book-movie-button">Book Tickets</button>
        </div>
      </div>
    )


}

export default MovieAboutPage;