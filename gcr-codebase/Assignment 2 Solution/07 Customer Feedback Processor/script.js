let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(" ");
let wordCount = words.length;

let containsBad = feedback.includes("bad");
let containsPoor = feedback.includes("poor");

console.log("Word Count: " + wordCount);

if (containsBad || containsPoor) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
