let productName = " wireless headphones PRO ";

let cleanedName = productName.trim().toLowerCase();

cleanedName = cleanedName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

cleanedName = cleanedName.replace("Pro", "Pro Edition");

console.log(`Product Title: ${cleanedName}`);
console.log(`Title Length: ${cleanedName.length}`);