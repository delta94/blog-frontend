import React, { useEffect, useState } from 'react';
import Title from '../Blog/Title';

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
        <section>
            {allPosts.map((post) => (
                <a href={post.title}>
                    <Title
                        title={post.title}
                        timestamp={post.timestamp}
                        last_edit={post.last_edit}
                    />
                </a>
            ))}
        </section>
    );
}
