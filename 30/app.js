var a = new String("Fernando");
console.log(a);

console.log(a.toUpperCase());
console.log(a.toLowerCase());

var i = a.indexOf("e");
console.log("the letter is: ", i);

var i = a.indexOf("a");
console.log("the letter is: ", i);

var i = a.indexOf("n");
console.log("the letter is: ", i);

i = a.lastIndexOf("n");
console.log("the letter is: ", i);

var name = a.substr(0, a.indexOf(" "));
console.log(name);

var split = a.split(" ");
console.log(split);
console.log(split.length);
