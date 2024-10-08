import inquirer from "inquirer"; // CommonJS syntax
// const fs = require("fs");
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name,github);

// fs.writeFile("./index.html", pageHTML, (err) => {
//   // If error exists throw an error.
//   if (err) throw err;

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ])
  .then((answers) => console.log(answers));
