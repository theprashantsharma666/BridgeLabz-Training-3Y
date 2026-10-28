"use strict";

const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const updateForm = document.getElementById("updateForm");
const output = document.getElementById("output");

document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("age").value = user.age;

function displayObject() {
    output.textContent = JSON.stringify(user, null, 2);
}

updateForm.addEventListener("submit", function(event) {
    event.preventDefault();

    user.name = document.getElementById("name").value.trim();
    user.email = document.getElementById("email").value.trim();
    user.age = Number(document.getElementById("age").value);

    displayObject();

    console.log(user);
});

displayObject();