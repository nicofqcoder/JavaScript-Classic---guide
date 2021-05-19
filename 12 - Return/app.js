// 01
function returnRandom(){
    return Math.random();
}

console.log(returnRandom() + 10);

// 02
function returnName(){
    return "Peter";
}

console.log(returnName() + " Parker");

var name = returnName();
console.log(name + " Parker");

// 03
function greaterThan05(){
    if(returnRandom() > 0.5){
        return true;
    }else{
        return false;
    }
}

console.log(greaterThan05());

if(greaterThan05()){
    console.log("Is greater than 0.5");
}else{
    console.log("Is less than 0.5");
}

// 04
function createFunction(){
    return function(){
        console.log("They created me");
    }
}

var newFunction = createFunction();
newFunction();

function createFunction(){
    return function(name){
        console.log(name + " created me");

        return function(){
            console.log("Second function")
        }
    }
}

var newFunction = createFunction();
newFunction(name);
var secondFunction = newFunction(name);
secondFunction();