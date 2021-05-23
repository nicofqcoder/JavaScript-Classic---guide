var today  = new Date();
var fMilli  = new Date(0);
var fFixed = new Date(2019, 10, 21, 23, 10, 15, 1);

console.log(today);
console.log(fMilli);
console.log(fFixed);

console.log(today.getFullYear());
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMilliseconds());
console.log(today.getMonth());

// 02
var start = new Date();
for(var i = 0; i< 3000; i++){
    console.log("Algo");
}

var end = new Date();

var duration = end.getTime() - start.getTime();
console.log(duration, "milliseconds");
console.log((duration/1000), "milliseconds");