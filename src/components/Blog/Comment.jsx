import React from 'react';

export default function Comment({ username, date, text }) {
    return (
        <article className="comment">
            <h5>{username || 'Anonymous'}</h5>
            <p className="text">{text}</p>
            <p className="date">{date}</p>
        </article>
    );
}
