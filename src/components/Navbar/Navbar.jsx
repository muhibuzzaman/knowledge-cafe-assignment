import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-container'>
                <h1>Knowledge Cafe</h1>
                <div className='anchor-container'>
                    <a href="/home">Home</a>
                    <a href="/about us">About Us</a>
                    <a href="/contact us">Contact Us</a>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Navbar;