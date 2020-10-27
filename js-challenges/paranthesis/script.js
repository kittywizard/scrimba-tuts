// 3 different ways

//1
//function encloseInBrackets(str)  {return str = "(" + str + ")"}

//2
//function encloseInBrackets(str) {return str = `(${str})`}

//3
//function encloseInBrackets(str) {return str = '('.concat(str, ')');}

let str = "hello";
console.log(encloseInBrackets(str));
