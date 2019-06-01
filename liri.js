/***********************************************
 * Project: LIRI
 * Developer: Sean Bryan
 * Date: 2019-05-29
 ***********************************************/
//Imports
require("dotenv").config();
var keys = require("./keys.js");
var inquirer = require("inquirer");

var command = require("./command.js");
// var service = process.argv[2];
// var name = process.argv[3];

inquirer.prompt([
    {
        type: "list",
        name: "service",
        message: "What service would you like to use?",
        choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"]
    }, {
        when: function (response) {
            if (response.service === "concert-this") {
                return true;
            }
        },
        type: "input",
        name: "name",
        message: "Enter Artist or Group:",
    },
    {
        when: function (response) {
            if (response.service === "spotify-this-song") {
                return true;
            }
        },
        type: "input",
        name: "name",
        message: "Enter Song Title:",
    },
    {
        when: function (response) {
            if (response.service === "movie-this") {
                return true;
            }
        },
        type: "input",
        name: "name",
        message: "Enter Movie Title:",
    }
]).then(function (user) {
    command.execute(user.service, user.name);
});