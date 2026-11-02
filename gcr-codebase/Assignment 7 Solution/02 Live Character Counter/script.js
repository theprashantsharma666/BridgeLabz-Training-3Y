"use strict";

const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maxCharacters = 100;

message.addEventListener("input", function() {

    const remaining = maxCharacters - message.value.length;
    counter.textContent = remaining + " characters remaining";
    counter.classList.remove("warning", "danger");

    if (remaining <= 20 && remaining > 0) {
        counter.classList.add("warning");
    }

    else if (remaining === 0) {
        counter.classList.add("danger");
    }
});

message.addEventListener("keydown", function(event) {

    const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft",
        "ArrowRight", "ArrowUp", "ArrowDown",
        "Tab", "Home", "End"
    ];

    if (message.value.length >= maxCharacters &&
        !allowedKeys.includes(event.key) &&
        event.key.length === 1 &&
        !event.ctrlKey && !event.metaKey) {

        event.preventDefault();
    }
});

resetButton.addEventListener("click", function() {
    message.value = "";
    counter.textContent = "100 characters remaining";
    counter.classList.remove("warning", "danger");
});