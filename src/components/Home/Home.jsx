import React, { useEffect, useState } from 'react';
import Title from '../Blog/Title';
import Loader from './Loader';
import { Link } from 'react-router-dom';

export default function Home() {
    const [allPosts, setAllPosts] = useState([]);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const request = await fetch('https://julio22b-blog-api-1.glitch.me/api/posts');
            const posts = await request.json();
            setShowLoader(false);
            setAllPosts(posts);
        };
        fetchPosts();
    }, []);

    const publishedPosts = allPosts.filter((post) => post.published);
    return (
        <>
            <h1 className="page-h1">My posts</h1>
            <Loader showLoader={showLoader} />
            <section className="home-section">
                {publishedPosts.map((post) => (
                    <Link to={`/post/${post._id}`} className="home-article-links" key={post._id}>
                        <Title
                            title={post.title}
                            timestamp={post.timestamp}
                            last_edit={post.last_update || `This post hasn't been edited yet`}
                            image={post.image}
                        />
                    </Link>
                ))}
            </section>
        </>
    );
}
