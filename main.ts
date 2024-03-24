//let message = "hello world";

//console.log(message);

//let message2 = "my name";

//console.log(message2);
//let message: string = "hello world";
//message = 123;
//console.log(message);
//let age: number = 23;

//let firstname: string="mutaiba";
//let age: number=15;
//let ismarried: boolean = true;

//let num1 = "mutaiba";
//let num2 = "chohan";

//console.log(num1 + num2);

//let num1 = 1;
//let num2 = 1;
//console.log(num1 + num2);

//num+string = string
//string+num = string
//let num1 = "1";
//let num2 = "2";
//console.log(num1 - num2);

// let num1 = "2";
// let num2 = "2";
// console.log(num1 * num2);

import inquirer from "inquirer";

let answer = await inquirer.prompt({
    name: "age",
    type: "number",
    message:"enter you age"
})
console.log ("my age is")
