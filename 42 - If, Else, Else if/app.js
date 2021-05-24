var points = 90;

if( points > 90 ){
	console.log("A");
}else if( points >= 80 ){
	console.log("B");
}else if( points >= 70 ){
	console.log("C");
}else if( points >= 60 ){
	console.log("D");
}else{
	if( points < 50 ){
		console.log("-F");
	}else{
		console.log("+F");
	}
}

console.log("End");