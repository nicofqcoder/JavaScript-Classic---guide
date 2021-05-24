var car = {
	color: "White",
	brand: "Mazda",
	print: function(){
		var out = this.brand + " - " + this.color;
		return out;
	}
}

var car2 = {
	color: "Red",
	brand: "Toyota"
}

console.log(car.print());

var logCar = function(arg1, arg2){
	console.log("Car: ", this.print());
	console.log("Arguments:", arg1, arg2);
	console.log("=============");
}

var logModelCar = logCar.bind(car);

logModelCar("abc","xyz");

logModelCar.call(car, "123", "456");
logModelCar.call(car, ["asd", "qwe"]);

// Funciones prestadas
console.log(car.print.call(car2));