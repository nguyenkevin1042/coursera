// console.log(document.getElementById('title'));
// console.log(document instanceof HTMLDocument);

function sayHello(){
	var name = document.getElementById('name').value;
	
	/*Use textContent to write a text*/
	//var message = "Hello " + name +"!";
	//document.getElementById('content').textContent = message;

	/*Use innerHTML to transfer a text to an element*/
	var message = "<h2>Hello " + name +"!</h2>";
	document.getElementById('content').innerHTML = message;

	if(name === "student"){
		//var title = document.getElementById('title').textContent;
		var title = document.querySelector('#title').textContent;
		title += " & Lovin' it";
		document.getElementById('title').textContent = title;
	}
	

	console.log(message);
}

