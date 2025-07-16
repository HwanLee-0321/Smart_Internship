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
                {/* 메인 경로 뒤에 SRC라는 주소값이 붙게 되면 => 실제 SRC컴포넌트를 보여주겠다. */}
                <Route path='/' element={<Home />}></Route>
                <Route path='/movie' element={<MovieDetail />}></Route>
                {/* 경로: product뒤에 숫자가 붙어 있다면 num이라는 파라미터 변수에 담겠다. */}
                <Route path='/movies' element={<MovieList />}></Route>
            </Routes>
        </div>
    )
}

export default App3