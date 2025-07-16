import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Component
import Layout from './components/Layout';

// Page Components
import Home from './example/Home';
import MovieList from './example/MovieList';
import MovieDetail from './example/MovieDetail';
import Search from './example/Search';
import NotFound from './example/NotFound';

const App3 = () => {
    return (
        <Routes>
            {/* Routes with Header and Footer */}
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="movies" element={<MovieList />} />
                <Route path="movie/:id" element={<MovieDetail />} />
                <Route path="search" element={<Search />} />
                {/* Catch-all route for 404 Not Found page */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App3;
