// 01
var a = 10;
var b = 20;

var c = (a > b)? function(){
	
	console.log("A > B");
	return a;

}() : function(){

	console.log("B > A");
	return b;

}();

console.log(c);

// 02
var d = 10;
var e = undefined;
var f = d || e;

console.log(c);

// 03
function getName(name){
	
	var nam = name || "<no name>" || "<no surname>";

	console.log(nam);

};

getName();