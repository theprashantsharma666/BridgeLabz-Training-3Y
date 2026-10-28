"use strict";

const studentForm = document.getElementById("studentForm");

const patterns = {
    name: /^[A-Za-z ]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/
};

function validateField(fieldId, pattern, errorMessage) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + "Error");
    const value = field.value.trim();

    if (!pattern.test(value)) {
        field.classList.add("invalid");
        field.classList.remove("valid");
        error.textContent = errorMessage;
        return false;
    }

    field.classList.add("valid");
    field.classList.remove("invalid");
    error.textContent = "";
    return true;
}

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameValid = validateField(
        "name",
        patterns.name,
        "Name must contain only alphabets and spaces."
    );

    const emailValid = validateField(
        "email",
        patterns.email,
        "Enter a valid email, e.g. example@domain.com."
    );

    const phoneValid = validateField(
        "phone",
        patterns.phone,
        "Phone number must contain exactly 10 digits."
    );

    const passwordValid = validateField(
        "password",
        patterns.password,
        "Password needs an uppercase letter, a number and a special character."
    );

    const result = document.getElementById("result");

    if (nameValid && emailValid && phoneValid && passwordValid) {
        result.textContent = "Registration successful!";
        result.style.color = "green";

        console.log("Student registration successful.");
        console.log("Name:", document.getElementById("name").value.trim());
        console.log("Email:", document.getElementById("email").value.trim());
        console.log("Phone:", document.getElementById("phone").value.trim());

    } else {
        result.textContent = "Please correct the errors above.";
        result.style.color = "red";
        console.log("Registration failed. Please check the form.");
    }
});
