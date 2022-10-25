function orderChickenWith(sideDish){
	// if (sideDish === undefined){
	// 	sideDish = "whatever!";
	// }

	//shortcut for if statement
	sideDish = sideDish || "whatever!";
	// how it works, it returns true first
console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();