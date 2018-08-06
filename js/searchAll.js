var searchInput = localStorage.getItem("searchInput");
var apiUrl = requestURL.apiAppend;
	var searchPage = 'https://newsapi.org/v2/everything?q='+searchInput+apiURL;
	relPath = "../"
	initBreaking(searchPage);
function seeAll() {
	window.location.href = '../html/searchAll.html';
}
