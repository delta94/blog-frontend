import React, { useState, useEffect } from 'react';
import Title from './Title';
import Content from './Content';

export default function Blog() {
    const [blog, setBlog] = useState('');

    useEffect(() => {
        const fetchBlog = async () => {
            const fetchData = await fetch(
                'http://localhost:4000/api/post/5ecfe968cc3fc4071c0081ea',
            );
            const blog = await fetchData.json();
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
