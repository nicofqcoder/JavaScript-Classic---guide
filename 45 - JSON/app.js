var objectJS = {
	name: "Fernando",
	age: 30
}

console.log("Object literal", objectJS);

var jsonString = JSON.stringify(objectJS);

console.log(jsonString);

var objectByJson = JSON.parse(jsonString);
console.log(objectByJson);

console.log(objectByJson.name);
console.log(objectByJson.age);