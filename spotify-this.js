/***********************************************
 * Project: LIRI
 * Developer: Sean Bryan
 * Date: 2019-05-29
 ***********************************************/
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

/**
* Process for spotify-this-song selection
*/
function spotifyThisSong(songName) {
    if (!songName) {
        songName = "The Sign Ace of Base"; //default
    }

    spotify
        .search({ type: 'track', query: songName })
        .then(function (response) {
            for (var item in response.tracks.items) {
                var songDetail = displaySongDetail(response.tracks.items[item]);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

/**
 * Display song details based on API response
 * @param item 
 */
function displaySongDetail(item) {
    console.log("Song Title: " + item.name);
    console.log("Album: " + item.album.name);
    var artistNames = getArtistNames(item.artists);
    console.log("Artist(s): " + artistNames.join(", "));
    console.log("Spotify Link: " + item.external_urls.spotify);
    console.log("+-----------------------------------------------------------------------+");
}

/**
 * Build an array of artist names with values taken from
 * artists object
 * @param artists 
 */
function getArtistNames(artists) {
    var artistNames = [];
    for (var artist in artists) {
        artistNames.push(artists[artist].name);
    }
    return artistNames;
}

module.exports = {
    spotifyThisSong: spotifyThisSong
}