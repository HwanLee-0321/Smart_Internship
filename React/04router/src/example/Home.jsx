import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Home.css'

const Home = () => {
    const nav = useNavigate();

    return (
        <div className='home'>
            <video autoPlay loop muted className='home-video'>
                <source src="/video.mp4" type="video/mp4" />
            </video>
            <div className='home-content'>
                <h1>Welcome to the Pepe Movie site</h1>
                {/* 버튼을 클릭했을 떄 -> 무비리스트 컴포넌트로 전환 */}
                <button onClick={()=>{nav('/movies')}}>Search</button>
            </div>
        </div>
    )
}

export default Home
