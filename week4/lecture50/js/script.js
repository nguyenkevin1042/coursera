//Array
// var array = new Array();
// array[0] = "Facebook";
// array[1] = 10;
// array[2] = function (name){
// 	console.log("Welcome to "+ name);
// }
// array[4] = { course:"HTML, CSS & JS" };

// console.log(array);
// console.log(array[1]);
// array[2];
// array[2]();
// array[2](array[0]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[4].course);

// Short hand array nonation
// var array = [0, 1, "HTML", "CSS"	];

// console.log("Original:");

// for(var i=0 ; i<short_array.length; i++){
// console.log(array[i]);
// }

// array[10]= "JS";
// console.log("After:");

// for(var i=0 ; i< array.length; i++){
// console.log(array[i]);
// }

// var array = [0, 1, "HTML", "CSS"	];
// for(var value in array){
// 	console.log(value + ": " + array[value]);
// }


//Issues when using for loop with array
// var myObj= {
// 	name: array[0],
// 	course: "HTML, CSS, JS",
// 	platform: "Coursera"
// };

// for( var prop in myObj){
// 	console.log(prop+": "+ myObj[prop]);
// }

var array = ["Yaakov", "John","Jim"];
array.greeting = "Greeting!"
for( var name in array){
	console.log("Hello "+ array[name]);
}