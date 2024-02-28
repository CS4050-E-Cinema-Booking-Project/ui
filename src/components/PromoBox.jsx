import React from 'react';
import "../style/PromoBox.css";

function UserBox({ id, description, status }) {
    return (
        <div className="promo-box">
            <div className='promo-details-box'>
                <h1 className='promo-box-title'>ID</h1>
                <h3>{id}</h3>
            </div>
            <div className='promo-details-box'>
                <h1 className='user-box-title'>Description</h1>
                <h3>{description}</h3>
            </div>
            <div className='promo-details-box'>
                <h1 className='promo-box-title'>Status</h1>
                <h3>{status}</h3>
            </div>
            <button className='delete-promo-button'>Delete Promotion</button>
        </div>
    );
}

export default UserBox;
