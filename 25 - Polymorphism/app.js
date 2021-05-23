function determinateData(a){
    if(a === undefined){
        console.log("A is undefined")
    }
    if(typeof a === "number"){
        console.log("A is a number");
    }
    if(typeof a === "string"){
        console.log("A is a text")
    }
    if(typeof a === "object"){
        console.log("A is a object")
    }
}

var b = new Number(3);
console.log(b);
determinateData(b);