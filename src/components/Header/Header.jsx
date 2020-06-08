import React from 'react';

export default function Header() {
    return (
        <header>
            <nav>
                <ul className="left-list">
                    <li>?</li>
                </ul>
                <ul className="right-list">
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
