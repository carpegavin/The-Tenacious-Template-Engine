const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

    // class employee

//--------------manager questions--------------

inquirer.promptManager([
    {
        type: "input",
        name: "name",
        message: "What is your manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your manager's id?",
    },
    {
        type: "input",
        name: "email", 
        message: "What is your manager's email?",
    },
    {
        type: "input",
        name: "office",
        message: "What is your Manager's office number?"
    },
    {
        type: "list",
        name: "member",
        message: "Which type of team member would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "No more team members, please"
        ],
    }


]).then(managerResponse => {
    if (response = Engineer) {
        promptEngineer();
    }   else if (response = Intern) {
        promptIntern();
    }   else {
        render(team);
    }
    team.push(new Manager());
})


//-------engineer questions------------------
inquirer.promptEngineer([
    {
        type: "input",
        name: "name",
        message: "What is your Engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your engineer's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your engineer's email?"
    },
    {
        type: "input",
        name: "GitHub",
        message: "What is your Engineer's GitHub username?",
    },
    {
        type: "list",
        name: "member",
        message: "Which type of team member would you like to add?",
        choices: [
            "Intern",
            "Engineer",
            "No more team members, please."
        ]
    }
]).then(engineerResponse => {
    if (response = Engineer) {
        promptEngineer();
    }   else if (response = Intern) {
        promptIntern();
    }   else {
        render(team);
    }
    team.push(new Engineer());
})

//-----------intern questions---------------
inquirer.promptIntern([
    {
        type: "input",
        name: "name",
        message: "What is your Intern's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your Intern's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your Intern's email?",
    },
    {
        type: "input",
        name: "school", 
        message: "What is your Intern's school?",
    },

    {
        type: "list",
        name: "member",
        message: "Would you like to add anymore team members?",
        choices: [
            "Intern",
            "Engineer",
            "No more team members. The perfect team has been built."
        ]
    }

]).then(internResponse => {
    if (response = Engineer) {
        promptEngineer();
    }   else if (response = Intern) {
        promptIntern();
    }   else {
        render(team);
    }
    team.push(new Intern());
})

team = [
    new Manager(),
    new Engineer(),
    new Intern(),
]
    
render(team);



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
