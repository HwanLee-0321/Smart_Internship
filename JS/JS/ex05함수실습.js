// 임의 숫자 2개
// addNumber 2개 값 더하기
// alert로 결과확인

let a = Number(prompt("첫번째숫자"));
let b = Number(prompt("두번째숫자"));

function addNumber1(a,b){return a+b;}
document.write(addNumber1(a,b) + '<br>');

const addNumber2 = function(a,b){return a+b;}
document.write(addNumber2(a,b) + '<br>');

addNumber3 = (a,b) => {return a+b;}
document.write(addNumber3(a,b) + '<br>');