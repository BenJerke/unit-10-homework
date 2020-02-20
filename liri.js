
require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var spotify = require("node-spotify-api");


//command 1
//node liri.js concert-this <artist/band name here>
//print command and entry in a line of log.txt

//send query to Bands In Town API for artist in process.argv[3]

//return and print to terminal the following: 
//event venue name
//event venue location
//date of event


//bandsintown query structure:
//(`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`)

//how many events though? 
///print data in log.txt


//command 2
//node liri.js spotify-this-song <songname>
//print command and entry in a line of log.txt

//send query to spotify, return the following: 

//artist name (or other matches if hit)
//song name 
//preview link of song(s)
//song album
//if nothing is returned, default to "i saw the sign" by ace of base

//uses node-spotify-api
//need spotify dev credentials
//print data in log.txt



//command 3
//node liri.js movie-this <moviename>
//print command and entry in a line of log.txt

//query OMDB API, and return the following; 
//movie title
//movie release year
//IMDB rating
//RT rating
//Country of origin
//Language
//Plot synopsis
//Actors

//if no movie entered, return results for "Mr. Nobody"
//use axios to hit OMDB API, use "trilogy" key
//console log command and entry in a line of log.txt



//command 4
//node liri.js do-what-it-says
//print command in log.txt

//use fs package to run whatever commands are posted in 'random.txt'
