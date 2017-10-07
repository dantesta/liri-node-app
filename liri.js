
var key = require('./keys.js');
var fs = require('fs');

var result = '';
var command = process.argv[2];
var searchName = process.argv[3];


function readTweets() {
  var parameters = {screen_name: 'RCBootcampTest', count: 5};
  var requestType = "Tweets";

  key.twitterKeys.get('statuses/user_timeline', parameters, function(error, readTweets, respond) {

    if (error) {
    	return console.log(error);
    } 

    for (var i = 0; i < 1; i++) {
      result += readTweets[i].created_at + "\n" + readTweets[i].text + "\n";
    }

    console.log(result);



  });

}


function movie() {
  var request = require('request');
  var requestType = "Movie Search";
  
  if(!searchName) {
    searchName = "Mr. Nobody";
  }
  
  request.get('http://www.omdbapi.com/?r=json&tomatoes=true&t=' + searchName + '&apikey=40e9cece&page=4', function (error, response, movie) {
    if (!error && response.statusCode == 200) {

      movie = JSON.parse(movie);

      result = movie.Title + 
      '\nYear: ' + movie.Year + 
      '\nIMDB Rating: ' + movie.imdbRating + 
      '\nRotten Tomatoes Rating: ' + movie.tomatoUserRating +
      '\nCountry: ' + movie.Country + 
      '\nLanguage: ' + movie.Language + 
      '\nPlot: ' + movie.Plot + 
      '\nActors: ' + movie.Actors;
      
      console.log(result);


    }
  })
}



  

function spotify() {

  var spotify = require('spotify');
  var requestType = "Search Spotify";



    if (!searchName) {
    searchName = '"The Sign" by Ace of Base'
  }


  spotify.search({ type: 'track', query: searchName }, function(err, data) {
    if (err) {

      return console.log(err);
        
    }

    result = 'Artist: ' + data.tracks.items[0].artists[0].name + '\nSong Title: ' + data.tracks.items[0].name + '\nAlbum Title: ' + data.tracks.items[0].album.name;
    
    console.log(result);


  });

}


