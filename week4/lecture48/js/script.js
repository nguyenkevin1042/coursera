// function test(){
// 	console.log("Hello World!");
// }

// test();

/***Use "this"***/
// function test(){
// 	this.company = "Facebook";
// }

// test();
// console.log(window.company);

/***Function contructors***/
// function Circle(radius) {
// 	this.radius = radius;
// 	this.getArea = function (){
// 		return Math.PI * Math.pow(this.radius,2);
// 	};
// }

// var cir1 = new Circle(10);
// console.log(cir1);
// console.log(cir1.getArea());

/***Child function will be executed every times 
whenever parent function was called***/

/***Use "prototype" to seperate a child function 
from a parent function***/
function Circle(radius) {
	this.radius = radius;
}

Circle.prototype.getArea = function() {
	return Math.PI * Math.pow(this.radius,2);
};

var cir1 = new Circle(10);
var cir2 = new Circle(1);
console.log(cir1);
console.log(cir1.getArea());
console.log(cir2);
console.log(cir2.getArea());