import inquirer from "inquirer"; // CommonJS syntax
// const fs = require("fs");
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name,github);

// fs.writeFile("./index.html", pageHTML, (err) => {
//   // If error exists throw an error.
//   if (err) throw err;

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });
// A prompt asking users about themselves.
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
      validate: (userGitHub) => {
        if (userGitHub) {
          return true;
        } else {
          console.log("Please enter you GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself.",
    },
  ]);
};
// A prompt asking users abour their projects.
const promptProject = (portfolioData) => {
  // If there's no 'projects' array property, create on.
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }

  console.log(`
    =================
    Add a New Project
    =================
`);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your project?",
        validate: (projectName) => {
          if (projectName) {
            return true;
          } else {
            console.log("Please enter your Project Name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)",
        validate: (projectDescription) => {
          if (projectDescription) {
            return true;
          } else {
            console.log("Please enter your Project Description!");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "languages",
        message: "What did you build this project with? (Check all that apply)",
        choices: [
          "JavaScript",
          "HTML",
          "CSS",
          "ES6",
          "JQuery",
          "Bootstrap",
          "Node",
        ],
      },
      {
        type: "input",
        name: "link",
        message: "Enter the GitHub link to your project. (Required)",
        validate: (githubLink) => {
          if (githubLink) {
            return true;
          } else {
            console.log("Please enter your GitHub link!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "feature",
        message: "Would you like to feature this project?",
        default: false,
      },
      {
        type: "confirm",
        name: "confirmAddProject",
        message: "Would you like to enter another project?",
        default: false,
      },
    ])
    .then((projectData) => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};
// Chain all promises together.
promptUser()
  .then(promptProject)
  .then((portfolioData) => {
    console.log(portfolioData);
  });
