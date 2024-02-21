import React from 'react';
import "../style/MovieBox.css";

function MovieBox({ image, title, date, time, tickets, seats }) {
    return (
        <div className="box">
            <div className="inner">
                <div className="left">
                    {image && <img src={image} alt={title} className="poster"/>}
                </div>
                <div className="right">
                    <div className='movie-title'>
                        <h2>{title}</h2>
                    </div>
                    <h3>{date}</h3>
                    <h3>{time}</h3>
                    <h3>{tickets}</h3>
                    <h3>{seats}</h3>
                </div>
            </div>
        </div>
    );
}

export default MovieBox;
