import React, { useEffect, useState } from 'react';
import Title from '../Blog/Title';
import { Link } from 'react-router-dom';
export default function Home() {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const request = await fetch('http://localhost:4000/api/posts');
            const posts = await request.json();
            setAllPosts(posts);
        };
        fetchPosts();
    }, []);

    return (
        <>
            <h1>My posts</h1>
            <section className="home-section">
                {allPosts.map((post) => (
                    <Link to={`/post/${post._id}`} className="home-article-links" key={post._id}>
                        <Title
                            title={post.title}
                            timestamp={post.timestamp}
                            last_edit={post.last_edit || `This post hasn't been edited yet`}
                        />
                    </Link>
                ))}
            </section>
        </>
    );
}