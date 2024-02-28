import React, { useEffect, useState } from "react";
import SelectSeatAge from "./SelectSeatAge";
import SelectSeats from "./SelectSeats";
import '../style/PurchaseTickets.css';
import SelectSeatNumberForm from "./SelectSeatNumberForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieTimeSelect from "./MovieTimeSelect";

const PurchaseTickets = () => {

  const {id} = useParams();

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

  const [seatAgeSelect, setSeatAgeSelect] = useState(null);
  const [seatCount, setSeatCount] = useState(1);
  const [seatPlacementSelect, setSeatPlacementSelect] = useState(null);

  const showSelectPopup = () => {
    var seatSelectComponent = <SelectSeats seatCount={seatCount} currId={id} />
    setSeatPlacementSelect(seatSelectComponent);
  }

  const seatSelectChangeHandler = (event) => {
    document.getElementById('proceed1').style.display = 'block';
    setSeatCount(event.target.value);
  }

  const seatSelectFormHandler = (event) => {
    // setSeatAgeSelect(null);
    document.getElementById('proceed1').style.display = 'none';
    event.preventDefault();
    event.preventDefault();
    var ageSelectComponent = <SelectSeatAge seatCount={seatCount} displaySeatSelect={showSelectPopup} />;
    setSeatAgeSelect(ageSelectComponent);
  }

  return (
    <div className="purchase-tickets-page">

      <div className="cover-image-container">
        <img className="movie-cover-image" src={selectedMovie.image} />
      </div>

      <div className="form-container">

          <MovieTimeSelect />

          <SelectSeatNumberForm seatSelectChangeHandler={seatSelectChangeHandler} seatSelectFormHandler={seatSelectFormHandler} />

          {seatAgeSelect}

        {seatPlacementSelect}

      </div>

    </div>

  );
};

export default PurchaseTickets;