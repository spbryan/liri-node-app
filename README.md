# liri-node-app
## Application Description
_A "siri" like application that interacts with API services to retrieve information based on user input.  Current functionality includes information retrieval for concert venues, spotify song selections, and movies.  There is also an IO feature to recieve commands from a random.txt file._

## Application Organization
The application is organized with separate js files defined for each service:
* __liri.js__ - Recieves command input and directs processing to command.js
* __command.js__ - Interprets input instructions and routes processing to the correct service
* __concert-this.js__ - Interacts with the bandsintown API to retrieve and display information for an input artist/group selection
* __spotify-this.js__ - Interacts with the spotify API to retrieve and display information for an input song selection
* __movie-this.js__ - Inteacts with the OMDB API to retrieve and display information for an input movie selection
* __do-what-it-says.js__ - Reads instructions from input file random.txt and directs processing to command.js

## Running the Application
To run this application use the command line:
__Concert Information__
node liri.js concert-this _<'group or artist'>_

__Spotify Song Information__
node liri.js spotify-this-song _<'song title'>_

__Movie Information__
node liri.js movie-this _<'movie title'>_

__From random.txt File__
node liri.js do-what-it-says

## Video
TBD

## Technology
This application was written in JavaScript on NodeJs.  
__NPM Installs__
* axios: ^0.18.0
* dotenv: ^8.0.0
* moment: ^2.24.0
* node-spotify-api: ^1.1.1

## Development Role
Application designed and developed by Sean Bryan as part of a homework assignment for the UNH Full Stack Boot Camp.
