// 01
var text = "Aeropuerto";
console.log(text);

var arr = text.match(/[aeiou]{2,2}/ig);

console.log(arr);

// 02 
var text2 = "La respuesta de la suma es: 45 + 60 = 105";
console.log(text2);

var arr2 = text2.match(/\d{1,}/g);

console.log(arr2);