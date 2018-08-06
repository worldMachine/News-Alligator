var searchInput = localStorage.getItem("searchInput");
console.log(searchInput);

var relPath = "../";
var apiUrl = requestURL.apiAppend;

	var searchPage = 'https://newsapi.org/v2/top-headlines?q='+searchInput+'&pageSize=100'+apiUrl;

	initBreaking(searchPage);
	
function seeAll() {
	window.location.href = '../html/searchAll.html';
}
