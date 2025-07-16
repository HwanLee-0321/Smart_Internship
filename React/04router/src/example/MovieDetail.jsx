import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../style/MovieDetail.css'

// API등록
const API_KEY = '5b713bc02d650713b3533d589abb5e0b';

const MovieDetail = () => {
    // useParams를 통해서 url파라미터 정보 가져오기
    const {id} = useParams();
    const nav = useNavigate();
    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        if(id){
            axios
                .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
                // 응답받아온 데이터 movie안에 넣기
                .then((res)=>{
                    console.log(res.data);
                    setMovie(res.data);
                })
                .catch((error)=>{
                    console.log('Error Data: ', error);
                })
        }
    }, [id])

    if (!movie){
        return <div>Loading...</div>
    }

    return (
        <div className='movie-detail'>
            <div className='buttons'>
                <button onClick={() => nav('/movies')}>목록으로</button>
                <button onClick={() => nav('/')}>홈으로</button>
            </div>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p><strong>개봉일:</strong> {movie.release_date}</p>
            <p><strong>평점:</strong> {movie.vote_average}</p>
            <p className='overview'>{movie.overview}</p>
        </div>
    )
}

export default MovieDetail
