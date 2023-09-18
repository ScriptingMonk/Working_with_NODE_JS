// const num = require('./2-Modules_Name');
const {num1 , num2} = require('./2-Modules_Name');


let a = num1
let b = num2

function addVal(a, b) {
    console.log(`The sum of number ${a} and ${b} is ${a + b}`);
}

addVal(a,b)