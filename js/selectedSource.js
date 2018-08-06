var relPath = "../";
var apiUrl = requestURL.apiAppend;

var selectedSource = localStorage.getItem("selectedSource");
var sourceName = localStorage.getItem("sourceName");

	var searchPage = 'https://newsapi.org/v2/everything?sources='+selectedSource+'&language=en&pageSize=40'+apiUrl;

	initBreaking(searchPage);
	
function seeAll() {
	window.location.href = '../html/searchAll.html';
}
