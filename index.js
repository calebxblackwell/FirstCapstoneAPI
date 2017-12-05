$(document).ready(function() {
	//youtube api request
	function loadVideo() {
		$.getJSON("https://www.googleapis.com/youtube/v3/search", {
			"q": searchTerm,
			"part": 'snippet',
			"key": 'AIzaSyDnFkudd6I1TMdIrE3OjM7wnIUsaMcRBPs',
		});
	}
	//giphy api request
	function giphySearch() {
		$.getJSON("api.giphy.com/v1/gifs/search", {
			"q": string,
			"part": 'snippet',
			"key": '6if1ypXf6jk20a8li9GAolyxMZ5hZ8uu',
			"limit": 10,
		});
	}
	//giphy js sdk code 
	var xhr = $.get("http://api.giphy.com/v1/gifs/search?&api_key=6if1ypXf6jk20a8li9GAolyxMZ5hZ8uu&limit=10");
	xhr.done(function(data){ console.log("success got data", data);
	});
	//initialize giphy SDK
  var GphApiClient = require('giphy-js-sdk-core'),
  client = GphApiClient("6if1ypXf6jk20a8li9GAolyxMZ5hZ8uu"),
    //giphy search info from website
  client.search('gifs', {"q": "cats"})
  .then((response) => {
    response.data.forEach((gifObject) => {
      console.log(gifObject);
    });
  })
  .catch((err) => {
  });
});