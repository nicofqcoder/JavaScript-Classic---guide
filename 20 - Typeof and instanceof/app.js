function identify(param){
    console.log(typeof param);
    console.log(param instanceof Person);
}

function Person(){
    this.name = "Fernando";
    this.age = 30;
}

var fernando = new Person();

identify("Fernando");
identify(fernando);