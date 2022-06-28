// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your application?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of the application",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide steps for installation of the application",
  },
  {
    type: "list",
    name: "license",
    message: "Select license for the application",
    choices: [
        "Apache 2.0",
        "Boost 2.0"
    ]   
  },
  {
    type: "input",
    name: "username",
    message: "Provide your github username",
  },
  {
    type: "input",
    name: "useremail",
    message: "Provide your email",
  },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log("filename", fileName);
  console.log("data", data);
  fs.writeFileSync(fileName,data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile("Generated ReadMe.md", markdown);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();