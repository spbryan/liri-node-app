/***********************************************
 * Project: LIRI
 * Developer: Sean Bryan
 * Date: 2019-05-29
 ***********************************************/
//Imports
require("dotenv").config();
var keys = require("./keys.js");

var service = process.argv[2];
var name = process.argv[3];

switch (service) {
    case 'concert-this':
        concertThis();
        break;
    case 'spotify-this-song':
        spotifyThisSong();
        break;
    case 'movie-this':
        movieThis();
        break;
    case 'do-what-it-says':
        doWhatItSays();
        break;
    default:
        console.log('Unrecognized Input Value ' + service + '.');
}

/**
 * Process for concert-this selection
 */
function concertThis () {
    console.log('boom - concert-this');
}

/**
 * Process for spotify-this-song selection
 */
function spotifyThisSong () {
    console.log('boom - spotify-this-song');
}

/**
 * Process for movie-this selection
 */
function movieThis () {
    console.log('boom - movie-this');
}

/**
 * Process for do-what-it-says selection
 */
function doWhatItSays () {
    console.log('boom - do-what-it-says');
}