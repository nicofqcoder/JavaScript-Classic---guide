var arguments = 10;

function myFunction(a,b,c,d){
    if(arguments.length !== 4){
        console.error("The function needs four paramenters");
        alert("The function needs four paramenters")
        return;
    }

    console.log(a+b+c+d);
}

myFunction(10,20,30,40,50,60,70);