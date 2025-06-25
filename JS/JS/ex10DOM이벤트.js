// event => 특정 요소에 이벤트가 감지 시 실행할 로직을 부여
// ex) click, mouseover, mouseout, ...
// on + 이벤트

// 버튼을 클릭 시, h1 태그 컨텐츠 값을 팝업창으로 띄워보기

const popUp = () => {
    alert('popUp : ' + document.getElementById('txt').innerText);
}

const popUp2 = () => {
    alert('popUp2 : ' + document.getElementById('txt').innerText);
}

// Case 1. html 태그에 직접 이벤트를 작성하는 방법
// 태그 안에 on이벤트 = "함수이름()" 넣어서 실행
// - 단점 : 함수명이 개발자모드에 노출,
//         하나의 요소당 하나의 이벤트만 처리 가능

// Case 2. EvnetHandler
// 하나의 요소 당 하나의 이벤트만 부여 가능 (함수명 노출 X)
// 요소.on이벤트 = 함수이름
let btn1 = document.getElementById('btn_han');

btn1.onclick = popUp;
btn1.onclick = popUp2;

// Case 3. EventListener ★
// 하나의 요소 당 여러 개의 이벤트 부여 가능 (함수명 노출 X)
// 요소.addEventListener('이벤트', 함수이름)
let btn2 = document.getElementById('btn_lis');

btn2.addEventListener('click', popUp);
btn2.addEventListener('click', popUp2);

// ** 함수 이름 없이 직접 등록
btn2.addEventListener('click', ()=>{
    alert('이름 없이 직접 등록한 함수');
})

// Case 4. 이벤트 객체
// 이벤트가 발생하는 그 주체와 내용을 알고싶을 때
// 예를 들면, 사용자가 어떤 버튼을 눌렀는지 알고 싶을 때 사용
let btn3 = document.getElementById('btn_event');
btn3.addEventListener('click', (e)=>{
    console.log('이벤트 : ', e.target);
})