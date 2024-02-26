import React from 'react';
import "../style/PastBox.css";

function PastBox({ image, title, date, time, tickets, seats }) {
    return (
        <div className="box">
            <div className="inner">
                <div className="left">
                    {image && <img src={image} alt={title} className="poster" />}
                </div>
                <div className='center'>
                    <h2 className='movie-title'>{title}</h2>
                    <h3>Date | {date}</h3>
                    <h3>Time | {time}</h3>
                    <h3>Ticket Amount | {tickets}</h3>
                    <h3>Seats | {seats}</h3>
                </div>
                <div className="right">
                    <button className='order-summary-button'>Order Summary</button>
                </div>
            </div>
        </div>
    );
}

export default PastBox;
