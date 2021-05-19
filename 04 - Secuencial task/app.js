// Secuencial work, is not asynrcono
function print(){

    for( var i = 0; i < 8000; i++){
        console.log("printed");
    }

}

function click(){
    console.log("Click");
}

print();