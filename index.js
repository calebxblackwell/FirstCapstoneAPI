$(document).ready(function() {
	//youtube api request
	function loadVideo() {
		$.getJSON("https://www.googleapis.com/youtube/v3/search", {
			"q": searchTerm,
			"part": 'snippet',
			"key": 'AIzaSyDnFkudd6I1TMdIrE3OjM7wnIUsaMcRBPs',
		});
	}
	//survey api request
	function googleSurvey() {
		$.getJSON("", {
			"q": searchTerm,
			"part": 'snippet',
			"key": 'AIzaSyCsCqAZs51XlAKQm1hdne25TuPqy8AMB2s',
		});
	}
	//below is random code from the survey google api site 
	function surveyInfo(){
		"title": "Vine Rating Scale Survey"
		"owners": ["calebxblackwell@gmail.com"],
		"wantedResponseCount": 100,
		"audience": {
			"country": "US",
			"languages": ["en-US"]
		},
		"questions": [{
			"question": "Do you like Vine videos?",
			"numStars": "ten",
			"lowValueLabel": "Not much.",
			"highValueLabel": "A lot!",
			"type": "ratingScale"
		}]
	}
});