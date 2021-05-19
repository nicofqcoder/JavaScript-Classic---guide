var person = {
    name: "Peter",
    surname: "Parker",
    age: 25,
    homeAddress: {
        country: "EEUU",
        city: "New York",
        edifice: {
            name: "Central edifice",
            phone: "2432-2332"
        }
    } 
};

console.log(person.name);
console.log(person.surname);
console.log(person.age);
console.log(person.homeAddress);
console.log(person.homeAddress.country);
console.log(person.homeAddress.city);

console.log(person.homeAddress.edifice.name);
console.log(person.homeAddress.edifice.phone);