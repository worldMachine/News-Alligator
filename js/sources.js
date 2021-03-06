var relPath = "../";
var url = requestURL.sources;
var chosenSource = requestURL.chosenSource;
initBreaking(url);


var sourceIds = []; 
var descriptions = [];
var names = [];





function initBreaking (requestURL) {
	
	var request = new XMLHttpRequest();

	request.open('GET', requestURL);

	request.responseType = 'json';
	request.send();

	request.onload = function () {
		var jsn = request.response;
		
		//start here
		formatJsn(jsn);
		setAttr();
		
		/* var currentPrice = newJsn[newJsn.length-1][1];
		console.log(name + "current price: "+currentPrice);
		popChart (newJsn, currentPrice, name, color); */
	}
}

function formatJsn (jsn) {
	var sources = jsn['sources']; 
	
	for(var obj in sources){
		var id = (sources[obj]['id']);
		var name = (sources[obj]['name']);
		//var imgUrl = (articles[obj]['urlToImage']);
		var description = (sources[obj]['description']);
		
		//var source = (articles[obj]['source']['name']);
		
		
		sourceIds.push(id);
		descriptions.push(description);
		names.push(name);
		
	}
}

function setAttr () {
	var containerId = "container0";
	var rowId = "row0";
	var bottomRowChildId = "brChild0";
	
	for (var i = 0; i < names.length; i++) {
		
		if (i % 4 === 0) {
			var idUp = (i/4).toString();
			containerId = 'container'+ idUp;
			rowId = 'row' + idUp;
			bottomRowChildId = 'brChild'+ idUp;
			
			var containerDiv = document.createElement("div");
			containerDiv.setAttribute('id', containerId);
			containerDiv.setAttribute('class', 'container');
			
			var rowDiv = document.createElement("div");
			rowDiv.setAttribute('id', rowId);
			rowDiv.setAttribute('class', 'row');
			
			var bottomRowDiv = document.createElement("div");
			bottomRowDiv.setAttribute('id', bottomRowChildId);
			
			rowDiv.appendChild(bottomRowDiv);
			containerDiv.appendChild(rowDiv);
			
			var mainDiv = document.getElementById("main");
			var bottomMainChild = document.getElementById("bottomMainChild");
			mainDiv.insertBefore(containerDiv, bottomMainChild);
		}
		
		var div = document.createElement("div");
		div.setAttribute('class','col-md-3');
		
		var a = document.createElement("a");
		a.setAttribute('onClick', 'sourceSelect("'+i+'")'); //*************
		a.setAttribute('class','pointer');
		div.appendChild(a); 
		
		/* var img = document.createElement("img");
		
		//console.log(imgs[i]);
		img.setAttribute('src', relPath+'resources/placeholder-image.png');
		
		img.setAttribute('width', '95%');
		a.appendChild(img); */
		
		var p = document.createElement("p");
		p.setAttribute('class', 'bold-font');
		var t = document.createTextNode(names[i]);     // *********************
		p.appendChild(t); 
		a.appendChild(p);
		
		/* var pS = document.createElement("p");
		var t2 = document.createTextNode(sources[i]);     // *********************
		pS.appendChild(t2); 
		a.appendChild(pS); */
		
		var p2 = document.createElement("p");
		var t2 = document.createTextNode(descriptions[i]);//******************
		p2.appendChild(t2);
		div.appendChild(p2);
		
		var rowDiv = document.getElementById(rowId);
		var brChild = document.getElementById(bottomRowChildId);
		rowDiv.insertBefore(div, brChild);
		
		
		
		/* 
		<div class="col-md-3">
			<a id="d1" href="">
				<img id ="img1" src="" width="95%">
				<p class="bold-font" id="p1"></p>
			</a>
				<p id="p1d"></p>
		</div> 
		*/
		
		/* 
		<div class="col-md-3">
			<a id="d1" href="">
				<img id ="img1" src="" width="95%">
				<p class="bold-font" id="p1"></p>
				<p></p>
			</a>
				<p id="p1d"></p>
		</div> 
		*/
	}
	
	/* var div = document.createElement("div");
	div.setAttribute('class','col-md-3');
	
	var a = document.createElement("a");
	a.setAttribute('href', urls[0]); //*************
	div.appendChild(a);
	
	var img = document.createElement("img");
	img.setAttribute('src', imgs[0]); //*****************
	img.setAttribute('width', '95%');
	a.appendChild(img);
	
	var p = document.createElement("p");
	p.setAttribute('class', 'bold-font');
	var t = document.createTextNode(titles[0]);     // *********************
	p.appendChild(t); 
	a.appendChild(p);
	
	var p2 = document.createElement("p");
	var t2 = document.createTextNode(descriptions[0]);//******************
	p2.appendChild(t2);
	div.appendChild(p2);
	
	var row1 = document.getElementById("row1");
	var tester = document.getElementById("tester123");
    row1.insertBefore(div, tester); */
	
	
	
	
	
	/* $("#img1").attr("src", imgs[0]);
	document.getElementById('p1').innerHTML = titles[0];
	document.getElementById('p1d').innerHTML = descriptions[0];
	$("#d1").attr("href", urls[0]); */

}

function search() {
	var input = document.getElementById("userInput").value;
	localStorage.setItem("searchInput", input);
	window.location.href = relPath+'html/search.html';
}

function setHeader(searchTerm) {
	document.getElementById('pageTitle').innerHTML = searchTerm;
}

function reloadPage () {
	location.reload();
}

function sourceSelect (source) {
	localStorage.setItem("selectedSource", sourceIds[source]);
	localStorage.setItem("sourceName", names[source]);
	window.location.href = '../html/selectedSource.html';
}
