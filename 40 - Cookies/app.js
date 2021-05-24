function createCookie(name, value){
	value = escape(value);

	var today = new Date();
	today.setMonth(today.getMonth() + 1);

	document.cookie = name + "=" + value + ";expires=" + today.toUTCString()+";";
}

function eraseCookie(name){
	var today = new Date();
	today.setMonth(today.getMonth() - 1);

	document.cookie = name + "=x;expires" + today.toUTCString()+";";
}

function getCookie(name){
	var cookies = document.cookie;

	var cookieArr = cookies.split("; ");
	console.log(cookieArr);

	return undefined;
}

console.log(getCookie("mail"));

// createCookie("name", "Fernando");
// eraseCookie("name");

var cookies = document.cookie;
console.log(cookies);