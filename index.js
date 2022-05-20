const inq = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter README title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description for your README',
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'Enter a table of contents for your README',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter a link to your deployed project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter what your project will be used for',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter a license',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter the contributors to your project',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter an example of how to test your project',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter information on how others can reach you with questions of your project',
    }
   
]

function generateReadme(answers) {
    fs.writeFileSync('./README.md', `
    # ${answers.title}
    ## Description
    ${answers.description}
    ## Table of Contents
    ${answers.contents}
    ## Installation Instructions
    ${answers.installation}
    ## Link
    [link](${answers.link})
    ## Usage
    ${answers.usage}
    ## License
    ${answers.license}
    ## Contributions
    ${answers.contributions}
    ## Tests
    ${answers.test}
    ## Questions
    ${answers.questions}
    `)
}

inq
.prompt(questions)
.then((answers) => {
    generateReadme(answers)
    console.log(chalk.green('README.md has been created!'))
})
.catch((error) => {
    if (error.itsanError) {
        console.error('Unable to render any prompts')
    } else {
        console.error(`There seems to have been an error`, error)
    }
});