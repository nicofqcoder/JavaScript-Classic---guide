function print(name, surname){
    if(surname === undefined){
        surname = "no surname"
    }
    // or --> surname = surname || "no surname";
    console.log(name + " " + surname);
}

print("Peter");