import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../style/MovieList.css'

const API_KEY = '5b713bc02d650713b3533d589abb5e0b';
const URL     = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

const MovieList = () => {
    // state생성
    const [movie, setMovie] = useState([])

    useEffect(()=>{
        // axios 요청을 통해서 콘솔창에 영화데이터를 출력하기.
        axios
            .get(URL)
            .then((res)=>{
                setMovie(res.data.results);
            })
            .catch((error)=>{
                console.error('Error Data', error);
            })
    },[])

    return (
        <div className='movie-list'>
            <h1>Popular Moives</h1>
            <Link to='/' className='home-link'>
                <button>홈으로</button>
            </Link>
            <div className='movies'>
                {movie.map((item) => (
                    <div key={item.id} className='movie'>
                        <Link to={`/movie/${item.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                        </Link>
                        <h3>{item.title}</h3>
                        <p>개봉일: {item.release_date}</p>
                        <p>평점: {item.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieList
