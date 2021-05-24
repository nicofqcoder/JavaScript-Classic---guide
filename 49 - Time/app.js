// 01
setTimeout(function(){
	
	console.log("one second");

}, 1000);

// 02

var seconds = 0;

var interval = setInterval(function(){

	seconds ++;

	console.log("seg", seconds);

	if(seconds === 3){
		clearInterval(interval);
	}

}, 1000);

// 03
var juan = {
	name: "Juan",
	age: 30,
	print: function(){

		var self = this;

		setTimeout(function(){
			console.log(this);
			console.log(this.name, this.age);
		}, 1000);
	}
};

juan.print();