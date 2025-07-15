import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './style/ex15.css'

const App15 = () => {
    // state 생성
    // city, temp, icon, cloud
    const [city, setCity] = useState('gwangju')
    const [temp, setTemp] = useState("0")
    const [icon, setIcon] = useState('')
    const [cloud, setCloud] = useState('')

    // 도시의 이름 추출
    const getCity=(name)=>{
        setCity(name);
    }

    const getData=()=>{
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=603aa562f93c1b6e5fb4e7596aa820d5`
        axios
            .get(url)
            .then((res)=>{
                console.log(res);
                setCloud(res.data.clouds.all);
                setTemp(parseInt(res.data.main.temp - 273));
                setIcon(res.data.weather[0].icon);
                console.log(city, temp, icon, cloud);
            })
            .catch(()=>{
                console.log('404 Not Found');
            })
    }        

    // 화면이 마운트 됐을 때, getData 함수 호출
    useEffect(()=>{
        getData();
    },[])

    return (
        <div className='weather-container'>
            <div className='weather-item'>
                <h1>날씨 확인</h1>
                <div>
        
                </div>
                <div>
                    <button onClick={()=>{
                        getCity('gwangju');
                        getData();
                        }}>광주</button>
                    <button onClick={()=>{
                        getCity('seoul');
                        getData();
                        }}>서울</button>
                    <button onClick={()=>{
                        getCity('busan');
                        getData();
                        }}>부산</button>
                </div>
            </div>
        </div>
    )
}

export default App15