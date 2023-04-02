import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const { id, cover_img, author_img, title, author_name, release_date, read_time } = props.blog;
    return (
        <div className='blog-container'>
            <div>
                <img src={cover_img} alt="" />

                <div className='author'>
                    <div className='author-info-container'>
                        <img src={author_img} alt="" />
                        <div className='author-info'>
                            <p className='author-name'>{author_name}</p>
                            <p className='release-date'>{release_date}</p>
                        </div>
                    </div>

                    <div className='read-time'>
                        <p>{read_time} min read</p>
                        <button><FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                </div>

                <h3 className='title'>{title}</h3>
                <div className='hard-text'>
                    <p>#beginners</p>
                    <p>#programming</p>
                </div>

                <button className='mark-as'>Mark as read</button>
            </div>
            <hr />

        </div>
    );
};

export default Blog;