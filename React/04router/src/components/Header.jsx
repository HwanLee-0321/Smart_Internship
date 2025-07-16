import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Header.css';

const Header = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?query=${query}`);
            setQuery('');
        }
    };

    return (
        <header className="app-header">
            <div className="header-container">
                <Link to="/" className="logo">
                    My Movie App
                </Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        placeholder="Search for a movie..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        </header>
    );
};

export default Header;
