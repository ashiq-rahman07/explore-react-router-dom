import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Freind from '../Freind/Freind';

const Freinds = () => {
    const friends = useLoaderData()
    return (
        <div>
            <h3>I have so many freinds . YAY! {friends.length}</h3>
            {
                friends.map(friend => <Freind key={friend.id} friend={friend} ></Freind>)
            }
        </div>
       
    );
};

export default Freinds;