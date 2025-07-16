import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Home.css';

const videos = ['/video.mp4', '/video2.mp4'];

const Home = () => {
    const nav = useNavigate();
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    return (
        <div className='home'>
            <video 
                key={videos[currentVideoIndex]} 
                autoPlay 
                muted 
                onEnded={handleVideoEnd} 
                className='home-video'
            >
                <source src={videos[currentVideoIndex]} type="video/mp4" />
            </video>
            <div className='home-content'>
                <h1>Welcome to the Pepe Movie site</h1>
                <button onClick={() => { nav('/movies') }}>Search</button>
            </div>
        </div>
    );
}

export default Home;