import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FreindDetails = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h1>Details About: {friend.name}</h1>
            <p>Call him/her: {friend.phone}</p>
            <h3>Everything you need to know about this person</h3>
        </div>
    );
};

export default FreindDetails;