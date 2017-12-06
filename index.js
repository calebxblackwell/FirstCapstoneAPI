$(document).ready(() => {
	//youtube api request
	function loadVideo() {
		$.getJSON("https://www.googleapis.com/youtube/v3/search", {
			"q": searchTerm,
			"part": 'snippet',
			"key": 'AIzaSyDnFkudd6I1TMdIrE3OjM7wnIUsaMcRBPs',
		});
	}
	//listener for the search button
	$('.search-button').on('click', function(e) {
	  e.preventDefault();
		//listener for the form input
		var userInput = $('#form-value').val().trim();
		//change spaces to + for the api to work
		userInput = userInput.replace(/ /g, "+");
		//giphy api url
		const queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=6if1ypXf6jk20a8li9GAolyxMZ5hZ8uu';
		$.ajax({
			url: queryURL,
			method: 'GET'
		}).done(response => {
		//api response data
			console.log(response);
			var giphyURL = response.data[0].images.fixed_height.url;
			console.log(giphyURL);
			$('#here_is_gif').attr('src', giphyURL);
		});
		$('#reset-button').on('click', function() {
			$('#here_is_gif').attr("src", '');
		});
		return false; //prevents default page refresh
	});
});
