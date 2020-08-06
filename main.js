const readline = require("readline-sync")




function add(num1, num2) {
    return Number(num1) + Number(num2)
}



function mul(num1, num2) {
    return Number(num1) * Number(num2)
}

function div(num1, num2) {
    return  Number(num1) / Number(num2)
}  
    
   
function sub(num1, num2) {
    return Number(num1) - Number(num2)
}


const  num1 = readline.question('Please enter your first number? ');
const num2 = readline.question('Please enter your second number? ');
const operation = readline.question('Please enter the operation to perform: add, sub, mul, div ? ');

function result(num1, num2) {

    if (operation === 'add') {
            return add(num1, num2)
        }
    else if (operation === 'sub') {
             return sub(num1, num2)
    }
    else if (operation ==='mul') {
            return mul(num1, num2)
    }else {
            return div(num1, num2)
    }
 }


console.log('The result is:' + result(num1,num2))

