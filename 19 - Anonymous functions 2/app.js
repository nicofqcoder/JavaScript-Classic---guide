function runFunction(fn){
    if(fn() === 1){
        return true;
    }else{
        return false;
    }
    
};

console.log(
    runFunction(function(){
    console.log("Run anonymous function!");
    return 1;
}));