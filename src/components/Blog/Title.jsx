import React from 'react';

export default function Title({ title, image, timestamp, last_edit }) {
    return (
        <article className="post-details">
            <h2>{title}</h2>
            <figure>
                <img
                    src={
                        image ||
                        'https://via.placeholder.com/300x200.jpg/cedfdf/1d3557/?text=Blog+Doesn%27t+Have+An+Image+Yet'
                    }
                    alt=""
                    className="post-image"
                />
                <figcaption>
                    <p>
                        <span className="date">Posted on: {timestamp}</span> |
                        <span className="last-edit"> Last edit: {last_edit}</span>
                    </p>
                </figcaption>
            </figure>
        </article>
    );
}
