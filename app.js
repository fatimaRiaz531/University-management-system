#! /usr/bin/env node 
//  PROJECT UNIVERSITY MANAGEMENT SYSTEM 2024-06-17
import inquirer from "inquirer";
console.log("*".repeat(60));
console.log("Welcome to code with Fatima in University Management System");
console.log("*".repeat(60));
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let my_balance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter Student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return (true);
            }
            return "Please enter a non_empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled with the help of arrow key",
        choices: ['Fashion Designing', 'MS Excel', 'Python', 'TypeScript', 'Cooking']
    }
]);
const tution_fee = {
    "MS Excel": 1560,
    "Fashion Designing": 20000,
    "Python": 25000,
    "TypeScript": 21000,
    'Cooking': 2000
};
console.log(`\nTution Fees : ${tution_fee[answer.courses]}/-\n`);
console.log(`\n\tBalance: ${my_balance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment items:",
        choices: ['Bank Transfer', "Easypaisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        meassage: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return (true);
            }
            return "Please enter a non_empty value.";
        },
    }
]);
console.log(`\n\tYou select payment method ${paymentType.payment}\n`);
const tutionFees = tution_fee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`\n\tCongratulations, you have successfullly enrolled in ${answer.course}\n`);
}
let ans = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "What would you like to do next?",
        choices: ["View Status", " Exit"]
    }
]);
if (ans.select === "View Status") {
    console.log("\n***** Status******\n\t");
    console.log(`Student Name: ${answer.students}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Course: ${answer.courses}`);
    console.log(`Tution Fees Paid: ${paymentAmount}`);
    console.log(`Balance: ${my_balance += paymentAmount}`);
}
else {
    console.log(" \nExiting University Management System");
    console.log("\n\tInvalid amount due to course\n");
}
