import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const { id, cover_img, author_img, title, author_name, release_date, read_time } = props.blog;
    return (
        <div className='blog-container'>
            <img src={cover_img} alt="" />
            <h3 className='title'>{title}</h3>

            <div className='author'>
                <div>
                    <img src={author_img} alt="" />
                    <div className='author-info'>
                        <p className='author-name'>{author_name}</p>
                        <p className='release-date'>{release_date}</p>
                    </div>
                </div>

                <div className='read-time'>
                    <p>{read_time} min read</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;