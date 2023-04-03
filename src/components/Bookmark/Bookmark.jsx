import React from 'react';
import './Bookmark.css';

const Bookmark = ({ bookCart }) => {
    let title = '';
    let titleArray = []
    for (const singleCart of bookCart) {
        title = singleCart.title;
        titleArray = title + singleCart.title;
    }
    return (
        <div className='bookmark-container'>
            <p className='bookmark-count'>Bookmarked Blogs: {bookCart.length}</p>
            <div className='bookmark-title'>
                <p>{titleArray} </p>
            </div>
        </div>
    );
};

export default Bookmark;