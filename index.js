$(document).ready(function(){
//youtube api request
  function loadVideo(){
    $.getJSON("https://www.googleapis.com/youtube/v3/search",
    {
      "q":searchTerm,
      "part":'snippet',
      "key":'AIzaSyDnFkudd6I1TMdIrE3OjM7wnIUsaMcRBPs',
    });
  }
//instagram api request
  function linkInstagram(){
    $.getJSON("",
    {
      "q":searchTerm,
      "part":'snippet',
      "key":'', //https://www.instagram.com/developer/authentication/
    });
  }
//the idea behind the instagram section is that you can click on popular viner's instagram profiles to follow them on there. Though depending on authentication, it could just be bubble images of their profiles with their username hyperlinked. 

{

  // Title is optional, but very helpful for later reference
  "title": "Vine Rating Scale Survey"

  // Owners email must match the account making calls to the API.
  "owners": ["calebxblackwell@gmail.com"],
  "wantedResponseCount": 100,
  "audience": {
    "country": "US",
    "languages": ["en-US"]
  },
  
"questions": [
 {
   "question": "Do you like Vine videos?",
   "numStars":"ten",
   "lowValueLabel": "Not much.",
   "highValueLabel": "A lot!",
   "type": "ratingScale"
 }
]
}
  
  
});