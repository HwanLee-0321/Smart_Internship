// React의 useState, useEffect 훅과 axios 라이브러리를 임포트합니다.
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App14 = () => {
    /*
    API 호출을 통해 데이터를 주고받는 방법: fetch, axios

    [fetch]
    {장점}
    1. JS 내장 라이브러리로 별도 설치가 필요 없습니다.
    2. 상대적으로 속도가 빠릅니다.
    {단점}
    1. 일부 구형 브라우저에서 지원되지 않을 수 있습니다.
    2. 응답을 JSON으로 변환하는 작업이 필요합니다.

    [axios]
    {장점}
    1. fetch보다 다양한 기능을 제공합니다.
    2. 다양한 브라우저에서 호환됩니다.
    3. 자동으로 JSON 데이터로 변환해줍니다.
    {단점}
    1. 별도의 설치가 필요합니다 (npm i axios).
    2. 상대적으로 속도가 약간 느릴 수 있습니다.
    */

    // 영화 목록을 저장할 'movieList' state를 선언합니다.
    const [ movieList, setMovieList] = useState([])

    // 컴포넌트가 마운트될 때 한 번만 실행되는 useEffect입니다.
    useEffect(()=>{
        // 영화진흥위원회 일별 박스오피스 API URL입니다.
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=77fc64ec7f8cbd4d13eef62e19f8da89&targetDt=20250714'
        
        // axios��� 사용하여 GET 요청을 보냅니다.
        axios
            .get(url)
            .then((res)=>{
                // 요청이 성공하면 응답 데이터에서 일별 박스오피스 목록을 가져와 movieList state를 업데이트합니다.
                console.log(res.data.boxOfficeResult.dailyBoxOfficeList)
                setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList);
            })
            .catch(()=>{
                // 요청이 실패하면 에러 메시지를 콘솔에 출력합니다.
                console.log('404 Not Found')
            })
    }, []) // 의존성 배열이 비어있으므로, 마운트 시에만 실행됩니다.

    return (
        <div>
            <h1>영화ㅋㅋ 순위ㅋㅋ</h1>
            <table border="1px">
                <thead style={{textAlign: 'center', fontWeight: 'bold'}}>
                    <tr>
                        <th>순위ㅋㅋ</th>
                        <th>영화ㅋㅋ 제목ㅋㅋ</th>
                        <th>개봉일ㅋㅋ</th>
                    </tr>
                </thead>
                <tbody>
                    {/* movieList 배열을 map 함수로 순회하며 각 영화 정보를 테이블 행으로 렌더링합니다. */}
                    {movieList.map(movie => (
                        <tr key={movie.rnum} style={{textAlign: 'center'}}>
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