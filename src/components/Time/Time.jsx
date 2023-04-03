import React from 'react';
import './Time.css';

const Time = ({ cart }) => {
    let total = 0;
    for (const blog of cart) {
        total = total + blog.read_time;
    }
    return (
        <div className='time-container'>
            <p>Spend time on read: {total} min</p>
        </div>
    );
};

export default Time;