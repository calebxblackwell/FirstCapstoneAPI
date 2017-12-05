$(document).ready(function() {
	//youtube api request
	function loadVideo() {
		$.getJSON("https://www.googleapis.com/youtube/v3/search", {
			"q": searchTerm,
			"part": 'snippet',
			"key": 'AIzaSyDnFkudd6I1TMdIrE3OjM7wnIUsaMcRBPs',
		});
	}
	//listener for the search button
	$('.search_button').on('click', function() {
		//listener for the form input
		var userInput = $('#form-value').val().trim();
		//change spaces to + for the api to work
		userInput = userInput.replace(/ /g, "+");
		//giphy api url
		var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=6if1ypXf6jk20a8li9GAolyxMZ5hZ8uu';
		$.ajax({
			url: queryUrl,
			method: 'GET'
		}).done(function(response) {
			console.log(response.data);
			var giphyURL = response.data[0].images.fixed_height.url;
			console.log(giphyURL);
			$('#here_is_gif').attr("src", giphyURL);
		});
		$('#reset_button').on('click', function() {
			$('#here_is_gif').attr("src", '');
		});
		return false;
	});
	});