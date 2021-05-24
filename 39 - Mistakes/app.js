try {
	throw {
		errorname: "Type 1 error",
		action 	 : "Repair",
		coderror : 1
	}

	console.log("This part never runs")
}
catch(e){
	console.log(e);
	console.log(e.errorname);
	console.log(e.action);
	console.log(e.coderror);

	console.log("Part of the catch");
}
finally{
	console.log("Finally");
}