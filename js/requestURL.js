var bestSources = 'sources=abc-news,bloomberg,business-insider,bbc-news,cbs-news,cnbc,independent,msnbc,the-economist,the-huffington-post,the-new-york-times,the-wall-street-journal,time,the-washington-times,the-washington-post,the-telegraph,the-guardian-uk';
var techSources = 'sources=ars-technica,engadget,polygon,techcrunch,techradar,the-verge,wired,recode,next-big-future,hacker-news,the-next-web,new-scientist';
var businessSources = 'sources=business-insider,business-insider-uk,financial-post,fortune,financial-times,bloomberg,reuters,the-wall-street-journal,cnbc,info-money,the-economist';
var apiKey = config.key;
var apiURL = '&apiKey='+apiKey;
var pageSize = '&pageSize=40'
var english = '&language=en';
var newsTop = 'https://newsapi.org/v2/top-headlines?';
var newsEverything = 'https://newsapi.org/v2/everything?';

var requestURL = {
	everything: newsEverything + bestSources + english + pageSize + apiURL,
	everythingTop : newsTop + bestSources + english + pageSize + apiURL,
	tech: newsEverything + techSources + english + pageSize + apiURL,
	techTop: newsTop + techSources + english + pageSize + apiURL,
	business: newsEverything + businessSources + english + pageSize + apiURL,
	businessTop: newsTop + businessSources + english + pageSize + apiURL,
	crime: newsEverything + bestSources + '&q=crime OR law OR court OR lawyer OR criminal OR justice '+pageSize+apiURL,
	sources: 'https://newsapi.org/v2/sources?language=en'+apiURL,
	apiAppend: '&apiKey='+apiKey
}