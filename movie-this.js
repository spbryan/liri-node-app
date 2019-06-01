/***********************************************
 * Project: LIRI
 * Developer: Sean Bryan
 * Date: 2019-05-29
 ***********************************************/
var axios = require("axios");

/**
 * Process for movie-this selection
 */
function movieThis(movieName) {
    if(!movieName) {
        movieName = "Mr. Nobody";
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl)
    .then(function (response) {
        displayMovieDetail(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

/**
 * Display movie details based on API response
 * @param data 
 */
function displayMovieDetail(data) {
    console.log("+--------------------------------+");
    console.log("Title: " + data.Title);
    console.log("Year: " + data.Year);
    console.log("IMDB Rating: " + data.imdbRating);
    console.log("Rotten Tomatoes: " + getRottenTomatoes(data));
    console.log("Country: " + data.Country);
    console.log("Language: " + data.Language);
    console.log("Plot: " + data.Plot);
    console.log("Actors: " + data.Actors);
    console.log("+--------------------------------+");
}

/**
 * Isolate and return value for Rotten Tomatoes
 * @param data 
 */
function getRottenTomatoes(data) {
    for (var type in data.Ratings) {
        if(data.Ratings[type].Source === "Rotten Tomatoes") {
            return data.Ratings[type].Value;
        }
    }
    return "";
}

module.exports = {
    movieThis : movieThis
}