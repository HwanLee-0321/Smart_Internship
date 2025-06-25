// 함수: 특정 기능들을 묶어서 호출할 수 있도록 하는 기능
//       - 중복되는 코드를 최소하하고 재사용성 ㅆㅌㅊ

// "나만이 기계를 만들자!"
// 1. 함수 선언
// function 함수이름(parameter aka. 매개변수){ }
// () 매개변수 -> 함수의 재료
// {} 매개변수 -> 실행시킬 로직 

function juicemaker(){
    document.write("============================ <br>");
    document.write("주스 제조 시작<br>");
    document.write("오렌지 주스가 완성되었다!<br>");
    document.write("============================<br>");
}

juicemaker();

// let choice = prompt("과일?")
// 2. 매개변수 함수
function anyjuicemaker(choice, size){
    document.write("============================ <br>");
    document.write(choice + "주스 제조 시작 <br>");
    document.write(choice + "주스가 완성되었다! <br>");
    document.write("============================ <br>");

    if (size == 'venti'){
        document.write("4500원 <br>");
    } else {
        document.write("아 몰랑 <br>");
    }

}

anyjuicemaker('감귤', 'venti');

// 3. return

function rand(){
    return Math.floor(Math.random() * 3);
}

document.write(rand() + rand() + rand() + rand() + rand());