console.log('가바보');

let myChoice = prompt('무엇을 내시겠습니까? (가위,바위,보)');

if (myChoice != '가위' && myChoice != '바위' && myChoice != '보'){
    document.write("!!에러!!")
}

if (myChoice == '가위'){
    myChoice = 0;
} 
else if (myChoice == '바위'){
    myChoice = 1;
} 
else if (myChoice == '보'){
    myChoice = 2;
} 

// (3) 0 <= random <= 2
const comChoice = Math.floor(Math.random() * 3);

let arr = ['가위', '바위', '보'];

if (comChoice == myChoice){
    document.write("나의선택: " + arr[myChoice] + '<br>');
    document.write("컴퓨터의선택: " + arr[comChoice] + '<br>');
    document.write("결과는 비겼습니다 !<br>");
}

// 가위  0
// 바위  1
// 보    2

// 0
else if (comChoice == 0 && myChoice  == 1){
    document.write("나의 선택: 바위 <br>");
    document.write("컴퓨터의 선택: 가위 <br>");
    document.write("결과는 승리입니다. <br>");
}
else if (comChoice == 0 && myChoice  == 2){
    document.write("나의 선택: 보 <br>");
    document.write("컴퓨터의 선택: 가위 <br>");
    document.write("결과는 패배입니다. <br>");
}

// 1
else if (comChoice == 1 && myChoice  == 2){
    document.write("나의 선택: 보 <br>");
    document.write("컴퓨터의 선택: 바위 <br>");
    document.write("결과는 승리입니다. <br>");
}
else if (comChoice == 1 && myChoice  == 0){
    document.write("나의 선택: 가위 <br>");
    document.write("컴퓨터의 선택: 바위 <br>");
    document.write("결과는 패배입니다. <br>");
}

// 2
else if (comChoice == 2 && myChoice  == 0){
    document.write("나의 선택: 가위 <br>");
    document.write("컴퓨터의 선택: 보 <br>");
    document.write("결과는 승리입니다. <br>");
}
else if (comChoice == 2 && myChoice  == 1){
    document.write("나의 선택: 바위 <br>");
    document.write("나의 선택: 보<br>");
    document.write("결과는 패배입니다. <br>");
}