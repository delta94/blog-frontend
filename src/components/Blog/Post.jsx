import React, { useState, useEffect } from 'react';
import Title from './Title';
import Content from './Content';
import Comment from './Comment';

export default function Post({ match }) {
    const [blog, setBlog] = useState({});
    const [comments, setComments] = useState([]);
    const [commenter, setCommenter] = useState('');
    const [comment, setComment] = useState('');

    useEffect(() => {
        const fetchBlog = async () => {
            const response = await fetch(`http://localhost:4000/api/post/${match.params.id}`);
            const blog = await response.json();
            setBlog(blog);
        };
        fetchBlog();

        const fetchComments = async () => {
            const response = await fetch(
                `http://localhost:4000/api/post/${match.params.id}/comments`,
            );
            const comments = await response.json();
            setComments(comments);
        };
        fetchComments();
    }, [match.params.id]);

    const postComment = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:4000/api/post/${match.params.id}/comments`, {
            method: 'post',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ comment, commenter }),
        });
        const data = await response.json();
        setComment('');
        setCommenter('');
        setComments(comments.concat(data.document));
    };

    return (
        <section className="post">
            <Title
                title={blog.title}
                timestamp={blog.timestamp}
                last_edit={blog.last_edit || `This post hasn't been edited yet`}
            />
            <Content text={blog.text} />
            <div>
                <h4>Comments</h4>
                {comments.length ? (
                    comments.map((comment) => (
                        <Comment
                            username={comment.username}
                            text={comment.text}
                            date={comment.timestamp}
                            key={comment._id}
                        />
                    ))
                ) : (
                    <p>This post has no comments yet.</p>
                )}
                <form className="add-comment" onSubmit={(e) => postComment(e)}>
                    <p>Leave a comment</p>
                    <input
                        type="text"
                        onChange={(e) => setCommenter(e.target.value)}
                        value={commenter}
                        placeholder="Name"
                    />
                    <textarea
                        name="comment"
                        cols="30"
                        rows="5"
                        onChange={(e) => setComment(e.target.value)}
                        defaultValue={comment}
                        placeholder="Your comment..."
                    ></textarea>
                    <button>Comment</button>
                </form>
            </div>
        </section>
    );
}
