async function fetchProducts() {
    let productContainer = document.getElementById("products");

    try {
        let response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        let products = await response.json();

        products.forEach(function(product) {
            console.log("Product: " + product.title);
            console.log("Price: $" + product.price);
            console.log("Image: " + product.image);

            let card = document.createElement("div");

            let title = document.createElement("h3");
            title.textContent = product.title;

            let price = document.createElement("p");
            price.textContent = "Price: $" + product.price;

            let image = document.createElement("img");
            image.src = product.image;
            image.alt = product.title;
            image.width = 150;

            card.appendChild(title);
            card.appendChild(price);
            card.appendChild(image);

            productContainer.appendChild(card);
        });

    } catch (error) {
        productContainer.textContent =
            "Failed to load products. Please try again.";

        console.log("Error: " + error.message);
    }
}

fetchProducts();