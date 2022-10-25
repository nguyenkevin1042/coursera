// var a = 5;
// var b = a;

// console.log("Before");
// console.log("a = " + a);
// console.log("b = " + b);

// b= 10;
// console.log("After updating b");
// console.log("a = " + a);
// console.log("b = " + b);

/******************/
// var a = { x:5};
// var b = a;

// console.log("Before");
// console.log(a);
// console.log(b);

// b.x= 10;
// console.log("After updating b.x");
// console.log(a);
// console.log(b);

/******************/
// function changePrimitive(primValue){
// 	console.log("in changePrimitive...");
// 	console.log("before:");
// 	console.log(primValue);

// 	primValue = 2;
// 	console.log("after:");
// 	console.log(primValue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("Original value after executing changePrimitive");
// console.log(value);

/******************/
function changeObject(obj){
	console.log("in changePrimitive...");
	console.log("before:");
	console.log(obj);

	obj.x = 10;
	console.log("after:");
	console.log(obj);
}

var obj = { x: 20};
changeObject(obj);
console.log("Original object after executing changeObject");
console.log(obj);