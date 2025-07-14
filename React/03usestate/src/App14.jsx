import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App14 = () => {
    /*
    API호출을 통해서 데이터를 주고 받는 방법: fetch, axios

    [fetch]
    {장점}
    1. JS자체 내장 라이브러리로 별도의 설치 필요 없음
    2. 속도가 상대적으로 빠름
    {단점}
    1. 지원이 되지 않는 브라우저가 존재
    2. json 변환 작업 필요

    [axios]
    {장점}
    1. fetch보다 상대적으로 다양한 기능
    2. 다양한 브라우저에서 사용가능
    3. 자동으로 json 변환

    {단점}
    1. 별도 설치 필요 (npm i axios)
    2. 속도가 좀 느림 - 엄청 느린 건 아님
    */
    // state 생성
    const [ movieList, setMovieList] = useState([])

    // useEffect 생성
    useEffect(()=>{
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=77fc64ec7f8cbd4d13eef62e19f8da89&targetDt=20250713'
        axios
            .get(url)
            .then((res)=>{
                console.log(res.data.boxOfficeResult.dailyBoxOfficeList)
                setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList);
            })
            .catch(()=>{
                console.log('404 Not Found')
            })
    }, [])
    return (
        <div>
            <h1>영화 순위</h1>
            <table border="1px">
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>영화 제목</th>
                        <th>개봉일</th>
                    </tr>
                </thead>
                <tbody>
                    {movieList.map(movie => (
                        <tr key={movie.rnum}>
                            <td>{movie.rank}</td>
                            <td>{movie.movieNm}</td>
                            <td>{movie.openDt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default App14