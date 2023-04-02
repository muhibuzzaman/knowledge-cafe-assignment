import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('fakeDb.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}></Blog>)
            }
            <h1>{blogs.length}</h1>
        </div>
    );
};

export default Blogs;