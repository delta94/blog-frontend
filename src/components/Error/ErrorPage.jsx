import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div>
            <h2 style={style}>
                Whoops. This page does not exist. Go back to <Link to="/home">Home</Link>
            </h2>
        </div>
    );
}

const style = {
    margin: '3em',
    textAlign: 'center',
    color: '#1d3557',
};
