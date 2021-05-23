// 01
var arr = [5,4,3,2,1];
console.log(arr);

// 02
console.log(arr[0], arr[4]);

// 03
arr.reverse();
console.log(arr);

// 04
arr = arr.map(function(elem){
    elem *= elem;
    return elem;
});
console.log(arr);

// 05
arr = arr.map(Math.sqrt);
console.log(arr);

// 06
arr = arr.join("|");
console.log(arr);

// 07
arr = arr.split("|");
console.log(arr);

// 08
arr.push("6");
console.log(arr);

// 09 
arr.unshift("0");
console.log(arr);

// 10
console.log(arr.toString());

// 11
var deletee = arr.pop();
console.log(arr, deletee);

// 12
arr.splice(1,1,"10");
console.log(arr);

// 13
arr.splice(1,0,"10","20","30");
console.log(arr);

// 14
arr = arr.slice(0,2);
console.log(arr);