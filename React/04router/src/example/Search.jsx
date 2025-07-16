import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../style/MovieList.css'; // Reuse MovieList style
import '../style/Search.css';

const API_KEY = '5b713bc02d650713b3533d589abb5e0b';

const Search = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const query = searchParams.get('query');

    useEffect(() => {
        if (!query) return;

        setLoading(true);
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
            .then((res) => {
                setMovies(res.data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error searching movies:', error);
                setLoading(false);
            });
    }, [query]);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    return (
        <div className="search-results-container">
            <h2>Search Results for "{query}"</h2>
            <div className="movie-list">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className="movie-item">
                            <Link to={`/movie/${movie.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://via.placeholder.com/500x750?text=No+Image';
                                    }}
                                />
                                <h3>{movie.title}</h3>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No movies found for your search.</p>
                )}
            </div>
        </div>
    );
};

export default Search;
