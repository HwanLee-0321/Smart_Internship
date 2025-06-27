// var.js에 있는 모듈 필요
const {odd,even} = require('./var.js');
function checkNum(num){if(num%2==1) odd; else return even;}
module.exports = checkNum;