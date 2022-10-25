// var name= "Yaakov";
// function sayHello(){
// 	console.log("Hello "+ name);
// }

// (function () {
// 	var yaakovGreeter= {};
// 	yaakovGreeter.name = "Yaakov";
// 	var greeting = "Hello "; 
// 	yaakovGreeter.sayHello = function (){
// 	console.log(greeting+ yaakovGreeter.name);
// }
// })();

(function (window) {
	var yaakovGreeter= {};
	yaakovGreeter.name = "Yaakov";
	var greeting = "Hello "; 
	yaakovGreeter.sayHello = function (){
		console.log(greeting+ yaakovGreeter.name);
	}
	window.yaakovGreeter = yaakovGreeter;
})(window);
