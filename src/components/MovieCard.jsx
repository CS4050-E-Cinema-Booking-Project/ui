import React from "react";
import '../style/MovieCard.css';
import { useNavigate } from "react-router-dom";

const MovieCard = ({ img }) => {
    const navigate = useNavigate();

    const cardClickHandler = () => {
        navigate('/movie-info');
    }

    const ticketClickHandler = (event) => {
        event.stopPropagation();
        navigate('/purchase-tickets');
    }

    return (
      <div onClick={cardClickHandler} className="card">
        <img src={img} className="image" alt="Movie cover" />
        <div className="buttons">
          <button onClick={ticketClickHandler} className="buy">Tickets</button>
        </div>
      </div>
    );
  };

  export default MovieCard;