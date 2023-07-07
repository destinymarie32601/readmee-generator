// TODO: Include packages needed for this application
const inquirer = require('inquirer'); //install inquirer

const writeFile = require('fs').promises.writeFile; //

const generateMarkdown = require('./generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description of your project',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information for your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instructions for project',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose your License',
            choices: ['None', 'Apache 2.0', 'MIT', 'GPL 3.0', 'BSD 3-Clause', 'Boost 1.0', 'MPL 3.0', 'CC0 1.0']
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Enter contributions for your project',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter the test instructions for your project',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
        },
    ]


// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() { 
    inquirer
    .prompt(questions)
    .then((answers)=> writeFile('./README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully generated readme to /generated_README/README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
