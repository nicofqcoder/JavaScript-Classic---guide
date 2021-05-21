var name = "Peter";

var person = {
    name: "Mary",
    surname: "Watson",
    printName: function(){
        console.log(this.name + " " + this.surname);
    },
    address:{
        country: "EEUU",
        getcountry: function(){
            
            var self = this;

            var newAddress = function(){
                console.log(self);
                console.log("The address is in " + self.country);
            }

            newAddress();
        }
    }
};

person.name = "Andres";

person.printName();
person.address.getcountry();