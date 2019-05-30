/***********************************************
 * Project: LIRI
 * Developer: Sean Bryan
 * Date: 2019-05-29
 ***********************************************/
// require('dotenv').config();
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

/**
* Process for spotify-this-song selection
*/
function spotifyThisSong(songName) {
    spotify
        .search({ type: 'artist', query: songName })
        .then(function (response) {
            console.log(response.artists.items);
        })
        .catch(function (err) {
            console.log(err);
        });
}

module.exports = {
    spotifyThisSong: spotifyThisSong
}