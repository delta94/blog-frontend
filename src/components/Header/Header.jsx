import React from 'react';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>Something here</li>
                </ul>
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/">link to something else</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
