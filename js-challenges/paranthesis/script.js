// 3 different ways

//1
//regular method
//function encloseInBrackets(str)  {return str = "(" + str + ")"}

//2
//ES6 method
//function encloseInBrackets(str) {return str = `(${str})`}

//3
//using concat() 
//function encloseInBrackets(str) {return str = '('.concat(str, ')');}

// let str = "hello";
// console.log(encloseInBrackets(str));

function factorialNumber(num) {
    //factorial is num * each number less than itself
    let factorial = 1; 

    for (let i = 1; i < num; i++) {
        //for every iteration, we need to multiply i by .. ??
        factorial *= (i+1);
        console.log(factorial);
    }

    return factorial;
}

let num = 5;
console.log(factorialNumber(num));