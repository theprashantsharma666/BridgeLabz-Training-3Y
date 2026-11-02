"use strict";

const lightButton = document.getElementById("lightButton");
const darkButton = document.getElementById("darkButton");
const blueButton = document.getElementById("blueButton");

function changeTheme(themeName) {

    document.body.setAttribute("data-theme", themeName);

    document.body.setAttribute("current-theme", themeName);

    console.log("Current Theme:", themeName);
}


lightButton.addEventListener("click", function() {
    changeTheme("light");
});

darkButton.addEventListener("click", function() {
    changeTheme("dark");
});

blueButton.addEventListener("click", function() {
    changeTheme("blue");
});