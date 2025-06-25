let movieURL = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=b1a8996c67e4c5e300fb8703fd890a60&targetDt=20250601"

// fetch API: 비동기 통신을 위한 문법
//         - Client와 Server 사이에 데이터를 주고받기 위한 비동기 통신 api
// 반환타입: Promise 객체 -> text() / json()
// then -> 요청 성공 시, 응답 처리( 성공했을 때, 실행하는 함수)
// 첫번쨰 then -> json 데이터 파싱(응답을 받아서 json형식으로 변환)
// 두번째 then -> 파싱된 데이터를 출력 (변환된 실제 데이터를 출력)
// then이 2번 쓰는 이유 => 단계별로 처리해야하기 때문. 
//fetch(movieURL)
//.then((res) => res.json())
//then((data)=>console.log(data))
///catch((error)=>console.log(error))

const getMoiveData = async() => {
    // 서버로부터 응답이 올 때까지 잠시 대기
    let res = await fetch(movieURL);
    let data = await res.json();
    console.log('영화정보 >> ', data);
}
getMoiveData();
