import React from 'react';

export default function Title({ title, image, timestamp, last_edit }) {
    return (
        <article className="post-details">
            <h2>{title}</h2>
            <figure>
                <img src={image} alt="" />
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
