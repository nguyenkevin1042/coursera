//***1. Using object syntax***

// var company = new Object();
// console.log(company);

// company.name= "Facebook";
// console.log(company);

// company.ceo.firstName= "Mark";
// console.log(company);

// company.ceo = new Object();
// company.ceo.firstName= "Mark";
// company.ceo.favColor= "blue";
//Using dot nonation
// console.log("Facebook CEO name is "
// 	+ company.ceo.firstName);
//Using bracket notation
// console.log(company["name"]);
// company.$stock =110;

// var stockPropName = "stock of company"


// company[stockPropName] =110;
// console.log("Stock price of company is "+ company[stockPropName]);

//***2. Using literal syntax***
var facebook = {
	name: "Facebook",
	ceo: {
		firstName:"Mark",
		favColor: "blue"
	},
	"stock of company": 110

}

console.log(facebook);
console.log(facebook.name);
console.log(facebook.ceo.firstName);

