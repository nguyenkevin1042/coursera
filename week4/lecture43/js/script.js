// ***1. String concatination***
// var string = 'Hello';
// string+= ' World';
// console.log(string +'!');

// ***2. Regular Math Operators: +, -, *, / ***
// var x;
// console.log((2+3)/5);
// console.log(x/5);
// function test(a){
// 	console.log(a/5);
// }
// test();
// test(10);

// ***3. Equality***
// var x=4,y=4;
// if(x == y ){
//  console.log("x=4 is equal to y=4");
// }

// x='4';
// if(x == y ){
//  console.log("x='4' is equal to y=4");
// }

// ***4. Strict equality***
// if(x === y ){
//  console.log("Strict: x='4' is equal to y=4");
// } else{
// 	console.log("Strict: x='4' is not equal to y=4");
// }

// ***5.1. If all are false***
// if(false || null || undefined || "" || 0 || NaN){
// 	console.log("This line won't ever execuate");
// } else {
// 	console.log("All are false");
// }

// // ***5.2. If all are true***
// if(true && "agt" && 1 && -2 && "false"){
// 	console.log("All are true");
// } else {
// 	console.log("This line won't ever execuate");
// }


// ***6. Best practices for {}***
// function a() 
// {
// 	return //if after return does not have any statement,
// 			//it will set to default return;
// 	{
// 		name: "Yaakov"
// 	};
// }

// function b() {
// 	return{
// 		name: "Yaakov"
// 	};
// }

// console.log(a());
// console.log(b());


// ***7. For loop***
var sum =0;
for(var i=0;i<10;i++){
	sum+=i;
	console.log("i="+i +", sum = " +sum);
}
console.log("final sum = " +sum);