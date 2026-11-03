"use strict";

const searchInput = document.getElementById("searchInput");
const studentTable = document.getElementById("studentTable");
const noResults = document.getElementById("noResults");

const rows = studentTable.querySelectorAll("tbody tr");

searchInput.addEventListener("input", function() {
    const searchValue = searchInput.value.toLowerCase();
    let found = 0;

    rows.forEach(function(row) {
        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchValue)) {
            row.style.display = "";
            found++;
        } else {
            row.style.display = "none";
        }
    });

    if (found === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
});