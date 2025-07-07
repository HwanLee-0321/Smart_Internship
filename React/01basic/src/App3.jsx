import React from 'react';

const App3 = () => {
    // 1. prompt를 사용해 사용자 이름 입력받기 (기존 구조 유지)
    // 참고: prompt는 페이지 렌더링을 잠시 멈추기 때문에 실제 React 프로젝트에서는 권장되지 않습니다.
    let name = '이재환'

    // 날짜 관련 객체 생성
    let today = new Date();
    
    // 현재 월 가져오기 (getMonth()는 0부터 시작하므로 +1)
    let mon = today.getMonth() + 1;

    // 2. 계절을 판단하는 로직 추가
    let season = '';
    if (mon >= 3 && mon <= 5) {
        season = '봄';
    } else if (mon >= 6 && mon <= 8) {
        season = '여름';
    } else if (mon >= 9 && mon <= 11) {
        season = '가을';
    } else {
        // 12월, 1월, 2월
        season = '겨울';
    }

    return (
        <div>
            {/* 3. Date 객체를 그대로 출력하면 오류가 나므로, 문자열로 변환하여 출력 */}
            <div style={{ fontSize: '30px' }}>{today.toLocaleString()}</div>
            <hr />
            <div>{name}님 지금은 {season}입니다. 좋은 하루 보내세요:)</div>
        </div>
    );
};

export default App3;