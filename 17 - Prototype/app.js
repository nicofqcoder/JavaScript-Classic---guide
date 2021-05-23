// 01
function Person(){
    this.name     = "Fernando";
    this.surname  = "Gonzalez";
    this.age      = 30;
}

Person.prototype.printInfo = function(){
    console.log(this.name + " " + this.surname + "("+ this.age +")");

}

var fer = new Person();

console.log(fer);
console.log(fer.printInfo());

// 02
Number.prototype.isPositive = function(){
    if(this > 0){
        return true;
    }else{
        return false;
    }
}