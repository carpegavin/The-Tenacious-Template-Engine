const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//usew render to render our team from an array into the render function
const render = require("./lib/htmlRenderer");

var team = []
    
// render(team);
start();
//----General Question--
function start (){
    inquirer.prompt([
        {
            type:"list",
            message: "What tye of employee would you like to add to the team?",
            choices: ["Manager", "Engineer", "Intern", "The team is complete"],
            name: "employeeType"
        }
    ]).then(firstRes => {
        if(firstRes.employeeType !== "The team is complete"){
            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is your employee's name?",
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is your employee's id?",
                },
                {
                    type: "input",
                    name: "email", 
                    message: "What is your employee's email?",
                }
            ]).then(secondRes  => {
                if(firstRes.employeeType == "Manager"){
                    askManagerQuestions(secondRes);
                }else if (firstRes.employeeType == "Engineer"){
                    askEngineerQuestions(secondRes);
                }else if (firstRes.employeeType == "Intern"){
                    askInternQuestions(secondRes);
                }
            }) 
        } else {
            fs.writeFile(outputPath, render(team), (err)=> {
                if (err) throw err;
            })
            console.log("The World's greatest team has been assembled!")
        }
    });
}
//--------------manager questions--------------
function askManagerQuestions(secondRes) {
    inquirer.prompt([
        {
            type: "input",
            name: "office",
            message: "What is your Manager's office number?"
        },
    ]).then(managerResponse => {
        team.push(new Manager(secondRes.name, secondRes.id, secondRes.email, managerResponse.office));
        // console.log(team);
        start();
    })
}


// -------engineer questions------------------
function askEngineerQuestions(secondRes) {
    inquirer.prompt([
        {
            type: "input",
            name: "github", 
            message: "What is your GitHub username?"
        },
    ]).then(engineerResponse => {
        team.push(new Engineer(secondRes.name, secondRes.id, secondRes.email, engineerResponse.github));
        // console.log(team);
        start();
    })
}
//------------------intern questions----------------  
function askInternQuestions(secondRes) {
    inquirer.prompt([
        {
            type: "input",
            name: "school", 
            message: "What school do you attend?"
        },
    ]).then(internResponse => {
        team.push(new Intern(secondRes.name, secondRes.id, secondRes.email, internResponse.school));
        console.log(team);
        start();
    })
}

//-----------intern questions---------------
// inquirer.promptIntern([
//     {
//         type: "input",
//         name: "name",
//         message: "What is your Intern's name?",
//     },
//     {
//         type: "input",
//         name: "id",
//         message: "What is your Intern's id?",
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is your Intern's email?",
//     },
//     {
//         type: "input",
//         name: "school", 
//         message: "What is your Intern's school?",
//     },

//     {
//         type: "list",
//         name: "member",
//         message: "Would you like to add anymore team members?",
//         choices: [
//             "Intern",
//             "Engineer",
//             "No more team members. The perfect team has been built."
//         ]
//     }

// ]).then(internResponse => {
//     if (response = Engineer) {
//         promptEngineer();
//     }   else if (response = Intern) {
//         promptIntern();
//     }   else {
//         render(team);
//     }
//     team.push(new Intern());
// })




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
