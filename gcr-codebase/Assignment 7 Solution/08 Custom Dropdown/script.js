let dropdown = document.getElementById("dropdown");
let dropdownButton = document.getElementById("dropdownButton");
let options = document.getElementById("options");

dropdownButton.addEventListener("click", function() {
    if (options.style.display === "block") {
        options.style.display = "none";
    } else {
        options.style.display = "block";
    }
});


let optionList = document.querySelectorAll(".option");

optionList.forEach(function(option) {
    option.addEventListener("click", function() {
        dropdownButton.textContent = option.textContent;
        options.style.display = "none";

    });
});

document.addEventListener("click", function(event) {
    if (!dropdown.contains(event.target)) {
        options.style.display = "none";
    }
}, true);