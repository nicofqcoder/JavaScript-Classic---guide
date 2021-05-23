var arr = [
    true,
    {
        name    : "Francisco",
        surname : "Perez"
    },
    function(){
        console.log("I'am very happy to learn")
    },
    function(person){
        console.log(person.name + " " + person.surname);
    },
    ["Eduardo", "Charles", "Scott", "Melissa"]
];

console.log(arr);
console.log(arr[0]);
console.log(arr[1].name + " " + arr[1].surname);

arr[2]();
arr[3](arr[1]);
console.log(arr[4][3]);