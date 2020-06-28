import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <ul className="left-list">
                    <li>?</li>
                </ul>
                <ul className="right-list">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
