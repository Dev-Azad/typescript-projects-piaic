#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.bgGreen.black(' Welcome to the CLI-CALCULATOR developed using TypeScript.        \n Please follow the steps provided by the program to use calculator '));
while (true) {
    let answers;
    answers = await inquirer.prompt([{
            name: "operand1",
            type: "number",
            message: chalk.bgMagenta.bold("Enter First Number:")
        },
        {
            name: "operand2",
            type: "number",
            message: chalk.bgMagenta.bold("Enter Second Number:")
        },
        {
            name: "operator",
            type: "list",
            message: chalk.bgMagenta.bold("Choose what you want to Perform"),
            choices: ['Add', 'Subtract', 'Multiply', 'Divide']
        }
    ]);
    let op1 = Number(answers.operand1);
    let op2 = Number(answers.operand2);
    let answer;
    switch (answers.operator) {
        case 'Add':
            answer = op1 + op2;
            break;
        case 'Subtract':
            answer = op1 - op2;
            break;
        case 'Multiply':
            answer = op1 * op2;
            break;
        case 'Divide':
            answer = op1 / op2;
            break;
        default:
            answer = 0;
    }
    console.log(chalk.bgBlueBright.bold(`  Answer is ${answer}`));
    let response;
    response = await inquirer.prompt({
        type: "list",
        name: "whatNext",
        message: chalk.bgGray.red("Do you want to Continue calculation or Exit?"),
        choices: ["Yes", "Exit"]
    });
    if (response.whatNext === "Yes") {
    }
    if (response.whatNext === "Exit")
        break;
}
