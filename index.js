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
	  $.ajax("https://www.googleapis.com/surveys/v2/surveys",{
	    method:"GET",
	   headers:{
	     Authorization: `Bearer ya29.GlwYBWffo_VXQ1f5bK9sGMQvGrYIXRmvonRcq1V2G-w2HonzdBa2wzlkkhUzzzn-bmgVTVnIObkd_BBMlCNyGYekRpd8C2sqyDnFZK7H32DN3-gkast_QAxDmsps2w`,
	     'Content-Type': 'application/json',
	   } 
	  },
	 
	  (response, error) => {
	  console.log(response, error);
	}
	)}
	surveyInfo();
});