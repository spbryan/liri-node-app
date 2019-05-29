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
                var venueDetail = createVenueDetail(response.data[event]);
                console.log(venueDetail);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
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

module.exports = {
    concertThis : concertThis
}