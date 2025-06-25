// 데이터를 가져와서 표를 만드는 비동기 함수
async function fetchAndDisplayMovies() {
    // 1. KOBIS API URL 주소
    const movieURL = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=b1a8996c67e4c5e300fb8703fd890a60&targetDt=20250624";

    try {
        // 2. fetch를 사용하여 API에 데이터를 요청하고 응답을 기다림 (await)
        const res = await fetch(movieURL);
        // 3. 응답받은 데이터를 JSON 형태로 변환하고 기다림 (await)
        const data = await res.json();

        // 4. 실제 영화 목록은 data 객체 안의 boxOfficeResult.dailyBoxOfficeList에 위치함
        const movieList = data.boxOfficeResult.dailyBoxOfficeList;

        // 5. 화면에 표를 만드는 함수 호출
        createMovieTable(movieList);

    } catch (error) {
        // fetch나 데이터 처리 중 에러가 발생하면 콘솔에 출력
        console.error('영화 데이터를 불러오는 중 오류 발생:', error);
    }
}

// 영화 목록 배열을 받아 HTML 테이블을 생성하는 함수
function createMovieTable(movieList) {
    const table = document.getElementById('movieT');

    // movieList 배열의 각 영화에 대해 반복
    movieList.forEach(movie => {
        const tr = document.createElement("tr");

        // 순위(rank)
        const tdRank = document.createElement("td");
        tdRank.textContent = movie.rank;
        tr.appendChild(tdRank);

        // 영화 제목(movieNm)
        const tdTitle = document.createElement("td");
        tdTitle.textContent = movie.movieNm;
        tr.appendChild(tdTitle);

        // 영화 코드(movieCd)
        const tdCode = document.createElement("td");
        tdCode.textContent = movie.openDt;
        tr.appendChild(tdCode);

        table.appendChild(tr);
    });
}

let btn1 = document.getElementById('reqBtn');

btn1.addEventListener('click', fetchAndDisplayMovies);
// 페이지가 로드되면 영화 데이터를 가져오는 함수를 실행