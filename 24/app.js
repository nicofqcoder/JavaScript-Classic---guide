function createProduct(name, price){
    name  = name  || "No name";
    price = price || 0;

    console.log("Product:", name, "Price: ", price);
}

function createProduct100(name){
    createProduct(name, 100);
}

function createProductShirt(price){
    createProduct("Shirt,", price);
}

createProduct("Pencil,");
createProduct100("Compass,");
createProductShirt(75);






