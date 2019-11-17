const fs = require('fs');
const inquirer = require('inquirer')
var pdf = require('pdfmake')
const axios = require('axios');

inquirer
    .prompt([
        {
            type: "input",
            message: "Please provide your github username?",
            name: "userName"
        },
        {
            type: "input",
            message: "What's your favorite color?",
            name: "colorChoice"
        }

    ])

    .then(answers => {
        queryURL = "https://api.github.com/users/" + userName;

        axios
        .get(queryURL)
        .then(function(response) {
            console.log(response);


            fs.writeFile("profile.html", profile, (err) => {
                if (err) {
                    return err;
                } 

                console.log ("profile written");
            });
        });
    })