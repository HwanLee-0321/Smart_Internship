import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <Link to="/" className="home-link">
                Go to Homepage
            </Link>
        </div>
    );
};

export default NotFound;
