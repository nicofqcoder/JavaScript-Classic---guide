
var num = 10;
var str = "text";
var bol = true;
var und = undefined;
var nul = null;

console.log(num);
console.log(str);
console.log(bol);
console.log(und);
console.log(nul);

//Dynamic writing
num = str;

console.log(num);

bol = 10;

console.log(bol);

//Object
var obj = {
    number: 10,
    text: "New example",

    objSon: {
        number2: 20,
        text2: "New example 2"
    }
};

console.log(obj);