import React from 'react';

export default function Comment({ username, date, text }) {
    return (
        <article className="comment">
            <h2>{username || 'Anonymous'}</h2>
            <p className="text">{text}</p>
            <p className="date">{date}</p>
        </article>
    );
}
