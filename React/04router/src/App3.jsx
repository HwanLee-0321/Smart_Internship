import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MovieList from './example/MovieList'
import MovieDetail from './example/MovieDetail'
import Home from './example/Home'

const App3 = () => {
    /*
    [Routes, Route 세팅]
    - 경로가 '/' -> Home 컴포넌트를 보여주겠다.
    - 경로가 '/movies' -> MovieList 컴포넌트
    - 경로가 '/movie' -> MovieDetail 컴포넌트
    */
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/movie/:id' element={<MovieDetail />}></Route>
                <Route path='/movies' element={<MovieList />}></Route>
            </Routes>
        </div>
    )
}

export default App3