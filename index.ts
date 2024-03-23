import inquirer from "inquirer";

const answer = await inquirer.prompt([
{message: "Enter first number", type:"number",name:"firstNumber"},
{message: "Enter second number", type:"number",name:"secondNumber"},
{
    message: "Select one of the operators to perform operation", 
    type:"list",
    name:"operator",
    choices:["addition","subtraction","multiplication","division"],
},
]);

//CONDITION STATEMENT

if(answer.operator==="addition")
{
    console.log(answer.firstNumber + answer.secondNumber);
}
else if(answer.operator==="subtraction")
{
    console.log(answer.firstNumber - answer.secondNumber);
}
else if(answer.operator==="multiplication")
{
    console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.operator==="division")
{
    console.log(answer.firstNumber / answer.secondNumber);
}
else
{
    console.log("please select valid operator");
}