import React, { useState, useEffect } from 'react';
import Title from './Title';
import Content from './Content';
import postService from '../../services/postService';

export default function Post({ match }) {
    const [blog, setBlog] = useState('');
    console.log(match);
    useEffect(() => {
        const fetchBlog = async () => {
            const request = await fetch(`http://localhost:4000/api/post/${match.params.id}`);
            const blog = await request.json();
            setBlog(blog);
        };
        fetchBlog();
    }, []);
    return (
        <section className="post">
            <Title
                title={blog.title}
                timestamp={blog.timestamp}
                last_edit={blog.last_edit || `This post hasn't been edited yet`}
            />
            <Content text={blog.text} />
        </section>
    );
}
