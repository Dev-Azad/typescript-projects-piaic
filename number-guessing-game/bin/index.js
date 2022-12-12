#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => new Promise((res, rej) => setTimeout(res, 2000));
async function welcome() {
    const rainbow = chalkAnimation.rainbow("Let's Start the GAME!!!");
    await sleep();
    rainbow.stop();
    // question();
}
// // welcome();
async function question() {
    let attempts = 3;
    const randomNumber = Math.floor(Math.random() * 10);
    do {
        attempts--;
        console.log(`Attempts left = ${attempts}`);
        var que = await inquirer.prompt([
            {
                type: "number",
                name: "userInput",
                message: "Guess a Number between 1 to 10 ??? ",
                // validate: (answers: number) => {
                //   if (isNaN(answers)) {
                //     return console.log(chalk.red("Enter a valid Number"));
                //   }
                //   return true;
                // },
            },
        ]);
        if (que.userInput === randomNumber) {
            console.log(chalk.green("Congratulations, You WIN!!!"));
            break;
        }
        else if (que.userInput < randomNumber) {
            console.log(chalk.red("Your Number is LESS than Random Number"));
        }
        else if (que.userInput > randomNumber) {
            console.log(chalk.red("Your Number is GREATER than Random Number"));
        }
        if (attempts == 0) {
            console.log(chalk.red("You LOSE!!! \n GAME OVER!!!"));
            break;
        }
        else if (que.userInput != randomNumber) {
        }
        else {
            console.log("You WIN!!!");
            break;
        }
    } while (true);
}
// question()
async function repeat() {
    do {
        console.clear();
        await welcome();
        // attempts = 3;
        await question();
        var restart = await inquirer.prompt([{
                type: "list",
                name: "repeatagain",
                message: " Do youn want to Play Again?",
                choices: ["YES", "NO"]
            }]);
        if (restart.repeatagain == "YES") {
        }
        else {
            break;
        }
    } while (true);
}
repeat();
