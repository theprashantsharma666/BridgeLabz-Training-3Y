"use strict";

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

const usernamePattern = /^.{5,}$/;
const uppercasePattern = /[A-Z]/;
const lowercasePattern = /[a-z]/;
const numberPattern = /[0-9]/;
const specialCharPattern = /[^A-Za-z0-9\s]/;
const lengthPattern = /^.{8,}$/;

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!usernamePattern.test(username)) {
        message.textContent =
            "Username must contain at least 5 characters.";
        return;
    }

    if (!lengthPattern.test(password)) {
        message.textContent =
            "Password must contain at least 8 characters.";
        return;
    }

    if (!uppercasePattern.test(password)) {
        message.textContent =
            "Password must contain an uppercase letter.";
        return;
    }

    if (!lowercasePattern.test(password)) {
        message.textContent =
            "Password must contain a lowercase letter.";
        return;
    }

    if (!numberPattern.test(password)) {
        message.textContent =
            "Password must contain a number.";
        return;
    }
    if (!specialCharPattern.test(password)) {
        message.textContent =
            "Password must contain a special character.";
        return;
    }

    message.textContent = "Login successful!";
});