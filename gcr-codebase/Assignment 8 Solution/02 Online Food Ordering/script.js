let menuItems = [
    { name: "Pizza", price: 200 },
    { name: "Burger", price: 100 },
    { name: "Sandwich", price: 80 },
    { name: "Pasta", price: 150 }
];

function calculateBill(orderItems) {
    let priceList = orderItems.map(function(item) {

        let menuItem = menuItems.find(function(food) {
            return food.name === item;
        });

        if (menuItem === undefined) {
            throw new Error(item + " is not available in the menu");
        }

        return menuItem.price;
    });

    let total = priceList.reduce(function(sum, price) {
        return sum + price;
    }, 0);

    return total;
}

let result = document.getElementById("result");

try {
    let order = ["Pizza", "Burger", "Pasta"];

    let bill = calculateBill(order);

    result.innerHTML =
        "<h3>Order Details</h3>" +
        "<p>Ordered Items: " + order.join(", ") + "</p>" +
        "<p>Total Bill: Rs. " + bill + "</p>";

}
catch (error) {
    result.innerHTML = "<p style='color:red;'>" +
        error.message + "</p>";
}
