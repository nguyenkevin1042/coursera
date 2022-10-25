var literalCircle= {
	radius:10,
	getArea: function () {
		var self = this;

		console.log("Before increaseRadius");
		console.log(this);
		
		var increaseRadius = function () {
			self.radius = 20;
		}
		increaseRadius();
		console.log("After increaseRadius");
		console.log(this);
		return Math.PI * Math.pow(this.radius,2);
	}
};

console.log(literalCircle.getArea());