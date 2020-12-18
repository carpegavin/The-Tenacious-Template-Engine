const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const render = require("./lib/htmlRenderer");

var team = []
    

start();
//-------------General Questions--------------------
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

