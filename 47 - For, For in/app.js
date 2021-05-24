// 01
for( var i = 0; i < 10; i++ ){

	if( i === 5){
		break;
	}

	console.log(i);

};

// 02
var Person = function(){
	this.name    = "Juan";
	this.surname = "Pineda";
	this.edad    = 18;
}

var juan = new Person();
Person.prototype.address = "San José";

for(prop in juan){

	if(juan.hasOwnProperty(prop))
		continue;

	console.log(prop, ":", juan["prop"]);

}

for( num in [1,2,3,4,5,6,7,8,9,10]){
	console.log(num);
}

