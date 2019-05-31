/***********************************************
 * Project: LIRI
 * Developer: Sean Bryan
 * Date: 2019-05-29
 ***********************************************/
var axios = require("axios");
var moment = require("moment");

/**
* Process for concert-this selection
*/
function concertThis(name) {
    var queryURL = "https://rest.bandsintown.com/artists/" + name + "/events?app_id=codingbootcamp";
    console.log(queryURL);
    axios.get(queryURL)
        .then(function (response) {
            for (var event in response.data) {
                var venueDetail = displayVenueDetail(response.data[event]);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

/**
 * Display venue details based on API response
 * @param event 
 */
function displayVenueDetail(event) {
    console.log("Venue Name: " + event.venue.name);
    console.log("Location: " + event.venue.city + getRegion(event));
    console.log("Date: " + moment(event.datetime).format('MM/DD/YYYY'));
    console.log("+--------------------------------------------+");
}

function getRegion(event) {
    var region = event.venue.region;
    if (region) {
        return ", " + region;
    }
    return "";
}

module.exports = {
    concertThis: concertThis
}