#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number :", type: "number", name: "firstNum" },
    { message: "Enter your second number :", type: "number", name: "secondNum" },
    {
        message: "Select one the operator to perform action :",
        type: "list",
        name: "operator",
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Exponentiation', 'Modulus']
    },
]);
if (answer.operator === "Addition") {
    console.log(`The answer of ${answer.firstNum} + ${answer.secondNum} is ${answer.firstNum + answer.secondNum}`);
}
else if (answer.operator === "Subtraction") {
    console.log(`The answer of ${answer.firstNum} - ${answer.secondNum} is ${answer.firstNum - answer.secondNum}`);
}
else if (answer.operator === "Multiplication") {
    console.log(`The answer of ${answer.firstNum} x ${answer.secondNum} is ${answer.firstNum * answer.secondNum}`);
}
else if (answer.operator === "Division") {
    console.log(`The answer of ${answer.firstNum} / ${answer.secondNum} is ${answer.firstNum / answer.secondNum}`);
}
else if (answer.operator === "Exponentiation") {
    console.log(`The answer of ${answer.firstNum} ** ${answer.secondNum} is ${answer.firstNum ** answer.secondNum}`);
}
else if (answer.operator === "Modulus") {
    console.log(`The answer of ${answer.firstNum} % ${answer.secondNum} is ${answer.firstNum % answer.secondNum}`);
}
else {
    console.log(`Please select valid operator`);
}
