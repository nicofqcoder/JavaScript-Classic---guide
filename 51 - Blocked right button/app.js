document.onmousedown = function(arg){

    if(arg.button === 2){
        alert("Blocked click");
        return;
    }

    console.log(arg);

}

//

document.onmouseup = function(){

    var text = window.getSelection().toString();

    console.log(text);
}