import React from 'react';
import "../style/MovieBox.css";

function MovieBox({ title, description, image, id }) {
    return (
        <div className="box">
            <div className="inner">
                <div className="left">
                    {image && <img src={image} alt={title} id={id} />}
                </div>
                <div className="right">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieBox;
