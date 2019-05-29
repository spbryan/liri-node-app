/***********************************************
 * Project: LIRI
 * Developer: Sean Bryan
 * Date: 2019-05-29
 ***********************************************/
//Imports
require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
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
function concertThis() {
    var queryURL = "https://rest.bandsintown.com/artists/" + name + "/events?app_id=codingbootcamp";
    console.log(queryURL);
    axios.get(queryURL)
        .then(function (response) {
            for (var event in response.data) {
                var venueDetail = createVenueDetail(response.data[event]);
                console.log(venueDetail);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

/**
 * Process for spotify-this-song selection
 */
function spotifyThisSong() {
    console.log('boom - spotify-this-song');
}

/**
 * Process for movie-this selection
 */
function movieThis() {
    console.log('boom - movie-this');
}

/**
 * Process for do-what-it-says selection
 */
function doWhatItSays() {
    console.log('boom - do-what-it-says');
}

/**
 * Build a string with venue details based on API response
 * @param event 
 */
function createVenueDetail(event) {
    var venueDetail = "";
    var venueName = event.venue.name;
    var city = event.venue.city;
    var region = event.venue.region;
    var eventDate = moment(event.datetime).format('MM/DD/YYYY');
    venueDetail = venueName + " on " + eventDate + " - " + city;
    if (region) {
        venueDetail += ", " + region;
    } 
    return venueDetail;
}