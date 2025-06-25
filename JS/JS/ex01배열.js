console.log('배열 js');

// ** 배열 : 여러 변수를 하나의 묶음으로 다루는 것

// 1. 배열의 선언
// ** 배열을 나타내는 괄호 : 대괄호 []
let numList = [];
console.log('배열 선언 : ', numList);

// 2. 배열의 생성(할당)
numList[0] = 1;
numList[1] = 5;
console.log('배열 생성 : ', numList);

// 선언 + 생성
let member = ['임다이', '채수민', '선영표', '김자영'];
console.log('배열 선언+생성 : ', member);

// 3. 배열 내 데이터에 접근 -> 인덱스번호로
// 배열이름[접근하려는 인덱스번호]
console.log('배열 데이터 접근 : ', member[1]);

// 4. 배열 내 값 변경
// 배열이름[인덱스번호] = '바꿀 값'
member[3] = '김미송'
console.log('배열 값 변경 : ', member);

// 5. 마지막 인덱스 데이터 추가
// 배열이름.push(추가할 데이터)
member.push('조준용');
console.log('마지막 인덱스 데이터 추가 : ', member);

// 6. 첫 번째 인덱스 데이터 추가
// 배열이름.unshift(추가할 데이터)
member.unshift('CGI');
console.log('첫 번째 인덱스 데이터 추가 : ', member);

// 7. 배열 내 전체 데이터를 출력
// console.log(member[0])
// console.log(member[1])
// console.log(member[2])
// console.log(member[3])
console.log('배열 전체 데이터 출력 : ');
for(let i=0; i<4; i++){
    console.log(member[i]);
}

console.log('배열의 크기만큼 데이터 출력 : ');
for(let i=0; i<member.length; i++){
    console.log(member[i]);
}

// 8. 배열 내 '임다이'라는 데이터가 있는지 확인
// 배열이름.includes(찾을 데이터)
console.log('배열에 해당 데이터가 있는지 확인 : ', member.includes('임다이'));
console.log('배열에 해당 데이터가 있는지 확인 : ', member.includes('다이'));

// 9. 데이터의 인덱스 위치 찾기
// 배열이름.indexOf(인덱스 위치를 찾고 싶은 요소)
console.log('인덱스 위치를 찾고 싶은 요소 : ', member.indexOf('임다이'));

// 10. 배열이름.slice(시작인덱스, 끝인덱스)
// * 끝 인덱스는 -1 범위까지 출력됨
// ex) slice(0, 3) -> 0, 1, 2 인덱스까지만 접근
// 배열 내 '임다이' ~ '선영표' 데이터만 출력
console.log('slice() : ', member.slice(1, 4));
console.log('slice() : ', member.slice(3));

// 11. 배열 내 데이터 삭제하는 방법(3가지)
// 11-1. pop() 활용
// -> 배열의 마지막 위치에 있는 데이터를 삭제
member.pop();
console.log('pop() : ', member);

// 11-2. shift() 활용
member.shift();
console.log('shift() : ', member);

// 11-3. splice() 활용
// splice(인덱스, 삭제할 개수)
// 인덱스 : 삭제할 데이터의 위치
// 삭제할 개수 : 해당 인덱스 위치로부터 뒤로 삭제할 개수
member.splice(0, 1);
console.log('splice() : ', member);

member.splice(0, 2);
console.log('splice() : ', member);

//---------------------------------------------
// 숫자 10, 20, 30, 40 이 포함되어있는 list 생성
// console 창에 10,20,30,40 을 차례대로 출력해보자
// (1) for문
let list = [10, 20, 30, 40];
for(let i=0; i<list.length; i++){
    console.log(list[i]);
}
console.log(list.toString());

// (2) for-of문
let foodList = ['삼겹살', '대창', '곱창', '회'];
for(let i of foodList){
    console.log(i);
}

// (3) forEach문
let subList = ['HTML', 'CSS', 'JS'];
subList.forEach((item, index)=>{
    console.log(index, item);
})