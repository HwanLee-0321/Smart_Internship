// React의 useState, useEffect 훅과 HTTP 통신을 위한 axios, 그리고 스타일 파일을 임포트합니다.
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style/ex15.css';

const App15 = () => {
    // 날씨 정보를 관리하기 위한 상태(state)들을 선언합니다.
    const [city, setCity] = useState('gwangju'); // 도시 이름, 기본값 'gwangju'
    const [temp, setTemp] = useState("0");       // 온도 정보
    const [icon, setIcon] = useState('');        // 날씨 아이콘
    const [cloud, setCloud] = useState('');      // 구름 상태

    // 도시 이름을 인자로 받아 'city' 상태를 업데이트하는 함수입니다.
    const getCity=(name)=>{
        setCity(name);
    }

    // OpenWeatherMap API를 호출하여 날씨 데이터를 가져오는 함수입니다.
    const getData=()=>{
        // API 요청을 위한 URL. 'city' 상태값에 따라 요청하는 도시의 날씨가 달라집니다.
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=603aa562f93c1b6e5fb4e7596aa820d5`
        
        // axios를 이용해 GET 요청을 보냅니다.
        axios
            .get(url)
            // 요청이 성공하면 .then() 블록이 실행됩니다.
            .then((res)=>{
                // 응답(res)에서 필요한 데이터를 추출하여 상태를 업데이트합니다.
                
                // 온도는 켈빈(K) 단위로 제공되므로, 273을 빼서 섭씨(°C)로 변환합니다.
                setTemp(parseInt(res.data.main.temp - 273));
                // 날씨 아이콘 코드(res.data.weather[0].icon)를 이용해 이미지 URL을 만듭니다.
                setIcon(`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`);

                // 구름의 양(res.data.clouds.all)에 따라 하늘 상태를 한글로 변환하여 저장합니다.
                const cloudValue = parseInt(res.data.clouds.all);
                if (cloudValue >= 90){
                    setCloud("매우 흐림");
                } else if (cloudValue >= 60){
                    setCloud("흐림");
                } else if (cloudValue >= 30){
                    setCloud("약간 조금");
                } else {
                    setCloud("맑음");
                }

                // 현재 상태 값들을 콘솔에 출력하여 확인합니다.
                // 참고: setState는 비동기적으로 작동하므로, 이 console.log에서는 이전 상태값이 보일 수 있습니다.
                console.log(city, temp, icon, cloud);
            })
            // 요청 중 에러가 발생하면 .catch() 블록이 실행됩니다.
            .catch(()=>{
                console.log('404 Not Found: 도시 이름을 확인해주세요.');
            })
    }        

    // 컴포넌트가 처음 화면에 렌더링(마운트)될 때 한 번만 getData 함수를 호출합니다.
    // useEffect의 두 번째 인자인 의존성 배열이 비어있어([]), 최초 1회만 실행됩니다.
    useEffect(()=>{
        getData();
    },[city])

    return (
        <div className='weather-container'>
            <div className='weather-item'>
                <h1>날씨 확인</h1>
                <div className='weather-data'>
                    {/* 날씨 정보가 표시될 영역입니다. */}
                    <img src={icon} alt="날씨 아이콘" />
                    <h1>{temp}</h1>
                    <h1>{city}</h1>
                    <p>{cloud}</p>
                </div>
                <div>
                    {/* 각 버튼을 클릭하면 도시를 변경하고 해당 도시의 날씨를 새로 가져옵니다. */}
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