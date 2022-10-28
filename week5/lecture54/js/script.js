document.addEventListener("DOMContentLoaded",
	function (event) {

		function sayHello(event){
			this.textContent = "Said it!";
			var name = document.getElementById('name').value;
			
			var message = "<h2>Hello " + name +"!</h2>";
			document.getElementById('content').innerHTML = message;

			if(name === "student"){
				//var title = document.getElementById('title').textContent;
				var title = document.querySelector('#title').textContent;
				title += " & Lovin' it";
				document.getElementById('title').textContent = title;
			}	
			//console.log(message);
		}
		document.querySelector("button")
	.addEventListener("click", sayHello);

});



//Unobstrusive event binding
// 1.
// document.querySelector("button")
// 	.addEventListener("click", sayHello);
//2.
//document.querySelector("button").onclick = sayHello;
