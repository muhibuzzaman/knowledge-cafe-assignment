import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Time from '../Time/Time';
import Bookmark from '../Bookmark/Bookmark';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [cart, setCart] = useState([]);
    const [bookCart, setBookCart] = useState([]);

    useEffect(() => {
        fetch('fakeDb.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const markAsRead = blog => {
        const newCart = [...cart, blog];
        setCart(newCart);
    }

    const bookmark = blog => {
        const newBookCart = [...bookCart, blog];
        setBookCart(newBookCart);
    }

    return (
        <div className='display-container'>
            <div>
                {
                    blogs.map(blog =>
                        <Blog
                            key={blog.id}
                            blog={blog}
                            readTime={markAsRead}
                            bookMark={bookmark}
                        ></Blog>)
                }
            </div>

            <div>
                <Time cart={cart}></Time>
                <Bookmark bookCart={bookCart}></Bookmark>
            </div>
        </div>
    );
};

export default Blogs;