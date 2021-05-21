
function person(){
    this.name = "Juan";
    this.surname = "Mendoza";
    this.age = 30;

    this.printPerson = function(){
        return this.name + " " + this.surname + "("+ this.age +")";
    }
}

var juan =  new person();   

console.log(juan);
console.log(juan.name);
console.log(juan.printPerson());

