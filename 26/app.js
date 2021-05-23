// 01
function createFunctions(){
    var arr = [];
    var number = 1;

    arr.push(
        (function(number){
            return function(){
                console.log(number);
            }
        })(number)
        
    );

    number = 2;

    arr.push(function(){
        console.log(number);
    });

    number = 3;

    arr.push(function(){
        console.log(number);
    });

    return arr;
}

var functions = createFunctions();

functions[0]();
functions[1]();
functions[2]();

// 02
function createFunctions(){
    var arr = [];
    var number = 1;

    for(var number = 1; number <= 3; number ++){
        arr.push(
            (function(number){
                return function(){
                    console.log(number);
                }
            })(number)  
        );
    }
    return arr;
}

var functions = createFunctions();

functions[0]();
functions[1]();
functions[2]();