import React from 'react';

export default function Content({ text }) {
    return <article className="content" dangerouslySetInnerHTML={{ __html: text }}></article>;
}
