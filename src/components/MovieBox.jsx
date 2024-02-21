import React from 'react';
import "../style/MovieBox.css";

function MovieBox({ image, title, date, time, tickets, seats }) {
    return (
        <div className="box">
            <div className="inner">
                <div className="left">
                    {image && <img src={image} alt={title} className="poster" />}
                </div>
                <div className='center'>
                    <h2 className='movie-title'>{title}</h2>
                    <h3>{date}</h3>
                    <h3>{time}</h3>
                    <h3>{tickets}</h3>
                    <h3>{seats}</h3>
                </div>
                <div className="right">
                    <button className='view-seats-button'>View Seats</button>
                    <button className='cancel-order-button'>Cancel Order</button>
                </div>
            </div>
        </div>
    );
}

export default MovieBox;
