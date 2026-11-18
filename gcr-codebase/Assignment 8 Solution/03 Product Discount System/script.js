function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    let discount = (this.price * percent) / 100;
    let newPrice = this.price - discount;
    return newPrice;
};

let product1 = new Product("Laptop", 50000);
let product2 = new Product("Mobile", 20000);
let product3 = new Product("Headphones", 5000);

let price1 = product1.applyDiscount(10);
let price2 = product2.applyDiscount(15);
let price3 = product3.applyDiscount(20);

let result = document.getElementById("result");

result.innerHTML =
    "<h3>Product Details</h3>" +

    "<p>Product: " + product1.name +
    "<br>Original Price: Rs. " + product1.price +
    "<br>Discount: 10%" +
    "<br>New Price: Rs. " + price1 + "</p><hr>" +

    "<p>Product: " + product2.name +
    "<br>Original Price: Rs. " + product2.price +
    "<br>Discount: 15%" +
    "<br>New Price: Rs. " + price2 + "</p><hr>" +

    "<p>Product: " + product3.name +
    "<br>Original Price: Rs. " + product3.price +
    "<br>Discount: 20%" +
    "<br>New Price: Rs. " + price3 + "</p>";
