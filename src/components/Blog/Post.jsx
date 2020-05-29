import React, { useState, useEffect } from 'react';
import Title from './Title';
import Content from './Content';
import Comment from './Comment';
import postService from '../../services/postService';

export default function Post({ match }) {
    const [blog, setBlog] = useState({
        comments: [],
    });
    console.log('render');

    useEffect(() => {
        const fetchBlog = async () => {
            const request = await fetch(`http://localhost:4000/api/post/${match.params.id}`);
            const blog = await request.json();
            console.log(blog);
            setBlog(blog);
        };
        fetchBlog();
    }, [match.params.id]);
    return (
        <section className="post">
            <Title
                title={blog.title}
                timestamp={blog.timestamp}
                last_edit={blog.last_edit || `This post hasn't been edited yet`}
            />
            <Content text={blog.text} />
            <h4>Comments</h4>
            {blog.comments.length ? (
                blog.comments.map((comment) => (
                    <Comment
                        username={comment.username}
                        text={comment.text}
                        date={comment.timestamp}
                    />
                ))
            ) : (
                <p>This post has no comments yet.</p>
            )}
        </section>
    );
}
