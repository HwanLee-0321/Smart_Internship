// 내가 필요한 모듈 만들기
// var - 변수 2개 지정(홀수입니다/짝수입니다)
const odd = '홀수입니다.';
const even = '짝수입니다.';

// module: 현재 모듈(파일)에 대한 정보를 가지고 있는 객체
// module.exports: 이 모듈을 밖으로 내보냄
module.exports = {odd, even};