// var name= "John";
// function sayHi(){
// 	console.log("Hi "+ name);
// }


(function (window) {
	var johnGreeter= {};
	johnGreeter.name = "John";
	var greeting = "Hi "; 
	johnGreeter.sayHi = function (){
		console.log(greeting+ johnGreeter.name);
	}
	window.johnGreeter = johnGreeter;
})(window);

