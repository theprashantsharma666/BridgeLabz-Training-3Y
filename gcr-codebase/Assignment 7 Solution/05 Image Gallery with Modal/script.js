"use strict";

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalContent = document.querySelector(".modal-content");

gallery.addEventListener("click", function(event) {

    if (event.target.tagName === "IMG") {
        modalImage.src = event.target.src;
        modal.style.display = "flex";
    }
});

modal.addEventListener("click", function() {
    modal.style.display = "none";
});

modalContent.addEventListener("click", function(event) {
    event.stopPropagation();
});