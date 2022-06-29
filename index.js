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
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter the title of your application');
        return false;
      }
    }
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of the application",
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please provide a description for the application');
        return false;
      }
    }
  },
  {
    type: "input",
    name: "installation",
    message: "Provide instructions for installation of the application",
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please provide instructions for installation of the application');
        return false;
      }
    }
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage for the application",
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please provide usage for the application');
        return false;
      }
    }
  },
  {
    type: "list",
    name: "license",
    message: "Select license for the application",
    choices: [
        "Apache 2.0",
        "Boost 1.0",
        "Eclipse 1.0"
    ]   
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide guidelines for contribution",
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please provide guidelines for contribution');
        return false;
      }
    }
  },
  {
    type: "input",
    name: "tests",
    message: "Provide instructions to test the application",
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please provide instructions to test the application');
        return false;
      }
    }
  },
  {
    type: "input",
    name: "username",
    message: "Provide your github username",
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please provide your github username');
        return false;
      }
    }
  },
  {
    type: "input",
    name: "useremail",
    message: "Provide your email",
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please provide your email');
        return false;
      }
    }
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
