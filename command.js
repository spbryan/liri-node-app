/***********************************************
 * Project: LIRI
 * Developer: Sean Bryan
 * Date: 2019-05-29
 ***********************************************/
var concert = require("./concert-this.js");
var spotify = require("./spotify-this.js");
var movie = require("./movie-this.js");
var doIt = require("./do-what-it-says.js");

function execute(service, name) {
    switch (service) {
        case 'concert-this':
            concert.concertThis(name);
            break;
        case 'spotify-this-song':
            spotify.spotifyThisSong(name);
            break;
        case 'movie-this':
            movie.movieThis(name);
            break;
        case 'do-what-it-says':
            doIt.doWhatItSays();
            break;
        default:
            console.log('Unrecognized Input Value ' + service + '.');
    }
}

module.exports = {
    execute : execute
}