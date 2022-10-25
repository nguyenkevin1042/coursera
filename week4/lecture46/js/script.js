function multiply(x, y) {
  return x * y;
}
multiply.version = "v.1.0.0";
console.log(multiply(3,4));
console.log(multiply);
console.log(multiply.version);

/*Function Factory*/
function makeMultiplier(multiplier){
	var myFunc = function (x) {
		return multiplier*x;
	};
	return myFunc;
}

var doubleAll = makeMultiplier(2);
var multiplyBy3 = makeMultiplier(3);


console.log(doubleAll(10));
console.log(multiplyBy3(10));

//Passing function as arguments
function doOperationOn(x,y, operation){
	return operation(x,y);
}

var result = doOperationOn(5,2, multiply);
console.log(result);
