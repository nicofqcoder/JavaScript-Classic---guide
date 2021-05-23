var reg1 = RegExp("o");
var reg2 = /o/;

var text = "Hello world";

var arr = text.match(reg1);
console.log(arr);

var arr = text.match(/[a-zA-Z]/);
console.log(arr);

var arr = text.match(/^H[a-z]/);
console.log(arr);

var arr = text.match(/[aeiou]./);
console.log(arr);