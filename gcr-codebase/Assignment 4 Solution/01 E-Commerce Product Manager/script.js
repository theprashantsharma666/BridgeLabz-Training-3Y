"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price.toFixed(2)}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Headphones", 1500, "Accessories"),
    new Product(3, "Mouse", 800, "Accessories"),
    new Product(4, "Smartphone", 25000, "Electronics")
];

for (const product of products) {
    product.applyDiscount(10);
}

console.log("All Products:");

for (const product of products) {
    console.log(product.displayDetails());
}

const expensiveProducts = products.filter(function(product) {
    return product.price > 1000;
});

console.log("Products priced above ₹1000:");

for (const product of expensiveProducts) {
    console.log(product.displayDetails());
}
