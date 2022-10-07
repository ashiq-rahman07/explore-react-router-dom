import React from 'react';
import { Link } from 'react-router-dom';
import './Freind.css'

const Freind = ({friend}) => {
    const {id,name, email, username} = friend;
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p><small>UserName: <Link to={`/friend/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Freind;