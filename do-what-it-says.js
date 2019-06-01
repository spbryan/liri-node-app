/***********************************************
 * Project: LIRI
 * Developer: Sean Bryan
 * Date: 2019-05-29
 ***********************************************/
var fs = require("fs");
// var command = require("./command.js");
var service = "";
var name = "";

/**
 * Process for do-what-it-says selection
 */
function doWhatItSays() {
    var command = require("./command.js");
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        var commandList = data.split(",");
        service = commandList[0];
        name = commandList[1];

        command.execute(service, name);
        // for (var i = 0; i < commandList.length; i++) {

        //     command.execute(service, name);
        // }
    });
}

module.exports = {
    doWhatItSays: doWhatItSays
}