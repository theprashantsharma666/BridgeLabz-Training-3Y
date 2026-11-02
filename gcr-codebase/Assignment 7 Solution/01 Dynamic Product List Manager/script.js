"use strict";

const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

addButton.addEventListener("click", function() {
    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter a product name");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = productName;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    productList.appendChild(li);

    productInput.value = "";
});

productList.addEventListener("click", function(event) {
    const li = event.target.closest("li");

    if (!li) {
        return;
    }

    if (event.target.classList.contains("delete")) {
        li.remove();
    }

    if (event.target.classList.contains("edit")) {
        editProduct(li);
    }
});

function editProduct(li) {
    const span = li.querySelector("span");

    if (li.querySelector("input")) {
        return;
    }

    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;

    li.replaceChild(input, span);
    input.focus();

    function saveChanges() {
        const newName = input.value.trim();

        if (newName !== "") {
            span.textContent = newName;
        }

        li.replaceChild(span, input);
    }

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            saveChanges();
        }
    });

    input.addEventListener("blur", saveChanges);
}