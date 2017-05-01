$(function() {
  $("form").on("submit", function() {
var search = $("#search").val();
var apikey = "d5e9104b02fd4562bef87ecbb1407782"; // <---- Paste your API key here
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&" + "api-key=" + apikey;
$.ajax({
    url: url,
    method: 'GET',
}).done(function(result) {
  console.log(result);
  var results = result.response.docs;
  console.log(results[0].headline.main);
  for(var i=0; i < results.length; i++){
    var webpage = result.response.docs[i].web_url;
    $("#results").prepend(results[i].byline.original + "<br/>" + "Source: " +  results[i].source + "<br/>" + "Date: " + results[i].pub_date + "<br/>" + results[i].headline.main + "<br/>"+ results[i].snippet + "<br/>" + "Full story at: " +  webpage + "<br/><br/>");
  }
}).fail(function(err) {
    throw err;
});
});
});