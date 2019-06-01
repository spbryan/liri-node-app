/***********************************************
 * Project: LIRI
 * Developer: Sean Bryan
 * Date: 2019-05-29
 ***********************************************/
var fs = require("fs");
var readline = require('readline');
var service = "";
var name = "";

/**
 * Process for do-what-it-says selection
 */
function doWhatItSays() {
    var command = require("./command.js");
    var rl = readline.createInterface({
        input: fs.createReadStream('random.txt')
    });
    
    var line_no = 0;
    
    rl.on('line', function(line) {
        line_no++;
        var commandList = line.split(",");
        service = commandList[0];
        if (commandList.length === 2) {
            name = commandList[1];
            name = name.replace(/^"(.*)"$/, '$1');
        }
        command.execute(service, name);
        service = "";
        name = "";
    });
}

module.exports = {
    doWhatItSays: doWhatItSays
}