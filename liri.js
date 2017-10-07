
var key = require('./keys.js');
var fs = require('fs');

var result = '';
var command = process.argv[2];
var searchName = process.argv[3];


function readTweets() {
  var parameters = {screen_name: 'RCBootcampTest', count: 1};
  var requestType = "Tweets";

  key.twitterKeys.get('statuses/user_timeline', parameters, function(error, readTweets, respond) {

    if (error) {
    	return console.log(error);
    } 

    for (var i = 0; i < 1; i++) {
      result += readTweets[i].created_at + "\n" + readTweets[i].text + "\n";
    }

    console.log(result);

    appendLog(requestType);

  });

}












  

function spotify() {

  var spotify = require('spotify');
  var requestType = "Search Spotify";


  spotify.search({ type: 'track', query: searchName }, function(err, data) {
    if (err) {

      return console.log(err);
        
    }

    result = 'Artist: ' + data.tracks.items[0].artists[0].name + '\nSong Title: ' + data.tracks.items[0].name + '\nAlbum Title: ' + data.tracks.items[0].album.name;
    
    console.log(result);

    appendLog(requestType);

  });

}


