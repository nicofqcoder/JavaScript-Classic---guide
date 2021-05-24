function event1(arg){

	console.log("On");
	console.log(arg);

}

var object = document.getElementById("objDemo");

object.addEventListener("keypress", event1);

//

var object2 = document.getElementById("objDemo2");

object2.addEventListener("click", event1);