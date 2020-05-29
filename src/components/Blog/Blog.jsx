import React, { useState, useEffect } from 'react';
import Title from './Title';
import Content from './Content';
import postService from '../../services/postService';

export default function Blog() {
    const [blog, setBlog] = useState('');

    useEffect(() => {
        const fetchBlog = async () => {
            const request = await fetch('http://localhost:4000/api/post/5ed03e62ada4320cdc839c3c');
            const blog = await request.json();
            setBlog(blog);
        };
        fetchBlog();
    }, []);
    return (
        <section>
            <Title
                title={blog.title}
                timestamp={blog.timestamp}
                last_edit={blog.last_edit || `This post hasn't been edited yet`}
            />
            <Content text={blog.text} />
        </section>
    );
}
