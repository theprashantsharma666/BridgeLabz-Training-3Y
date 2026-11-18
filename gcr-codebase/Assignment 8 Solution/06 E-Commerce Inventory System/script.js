let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 3 },
    { id: 2, name: "Mobile", category: "Electronics", price: 20000, stock: 10 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1000, stock: 4 },
    { id: 4, name: "Shoes", category: "Footwear", price: 2500, stock: 8 },
    { id: 5, name: "Watch", category: "Accessories", price: 3000, stock: 2 }
];

function getLowStockProducts() {
    return products.filter(function(product) {
        return product.stock <= 5;
    });
}

function sortProductsByPrice() {
    return [...products].sort(function(a, b) {
        return a.price - b.price;
    });
}

function calculateTotalInventoryValue() {
    return products.reduce(function(total, product) {
        return total + (product.price * product.stock);
    }, 0);
}

function groupByCategory() {
    return products.reduce(function(groups, product) {
        let category = product.category;

        if (!groups[category]) {
            groups[category] = [];
        }

        groups[category].push(product);
        return groups;
    }, {});
}

let lowStock = getLowStockProducts();
let sortedProducts = sortProductsByPrice();
let totalValue = calculateTotalInventoryValue();
let groupedProducts = groupByCategory();

let result = document.getElementById("result");

result.innerHTML += "<h3>Low Stock Products</h3>";

lowStock.forEach(function(product) {
    result.innerHTML +=
        "<p>" + product.name +
        " - Stock: " + product.stock + "</p>";
});

result.innerHTML += "<hr><h3>Products Sorted By Price</h3>";

sortedProducts.forEach(function(product) {
    result.innerHTML +=
        "<p>" + product.name +
        " - Rs. " + product.price + "</p>";
});

result.innerHTML +=
    "<hr><h3>Total Inventory Value</h3>" +
    "<p>Rs. " + totalValue + "</p>";

result.innerHTML += "<hr><h3>Products Grouped By Category</h3>";

for (let category in groupedProducts) {
    result.innerHTML += "<h4>" + category + "</h4>";
    groupedProducts[category].forEach(function(product) {

        result.innerHTML +=
            "<p>" + product.name +
            " - Rs. " + product.price +
            " - Stock: " + product.stock + "</p>";
    });
}