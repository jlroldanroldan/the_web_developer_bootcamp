var faker = require('faker');



for (var i = 0; i <  10; i++){
    var randomProduct = faker.commerce.product(); // Rowan Nikolaus
    var randomPrice = faker.commerce.price(); // Rowan Nikolaus
    console.log(randomProduct + " -> " + randomPrice);
}

