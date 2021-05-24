// Single line comment

/*
    Multiline comment
    Multiline comment
    Multiline comment
    Multiline comment
*/

var arr = [
    
    // the first position .....
    // Is for .... 
    "Fernando",
    

    // the second....
    // its an object
        {
            name: "Fernando",


            // this property .... 
            // and with this....
            // is good because.....
            surname: "Herrera",


            // this property .... 
            // and with this....
            // is good because.....
            getName: function(){
                return this.name + " " + this.surname;
            }
    }, 
    
    
    true, function(){console.log(this); }];

console.log(
    arr
);