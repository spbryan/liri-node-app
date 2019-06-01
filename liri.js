/***********************************************
 * Project: LIRI
 * Developer: Sean Bryan
 * Date: 2019-05-29
 ***********************************************/
//Imports
require("dotenv").config();
var keys = require("./keys.js");

var command = require("./command.js");
var service = process.argv[2];
var name = process.argv[3];

command.execute(service, name);
