import React from 'react';
import "../style/UserBox.css";

function UserBox({ id, name, email, role }) {
    return (
        <div className="user-box">
            <div className='user-details-box'>
                <h1 className='user-box-title'>ID</h1>
                <h3>{id}</h3>
            </div>
            <div className='user-details-box'>
                <h1 className='user-box-title'>Name</h1>
                <h3>{name}</h3>
            </div>
            <div className='user-details-box'>
                <h1 className='user-box-title'>Email</h1>
                <h3>{email}</h3>
            </div>
            <div className='user-details-box'>
                <h1 className='user-box-title'>Role</h1>
                <h3>{role}</h3>
            </div>
            <button className='delete-user-button'>Delete User</button>
        </div>
    );
}

export default UserBox;
