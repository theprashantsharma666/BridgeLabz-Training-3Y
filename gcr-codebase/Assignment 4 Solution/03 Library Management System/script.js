"use strict";

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            return "This book is already issued.";
        }

        this.isIssued = true;
        return "Book issued successfully.";
    }

    returnBook() {
        if (!this.isIssued) {
            return "This book has not been issued.";
        }

        this.isIssued = false;
        return "Book returned successfully.";
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "101"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "102"),
    new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "103"),
    new Book("Atomic Habits", "James Clear", "104")
];

function displayBooks() {
    const bookList = document.getElementById("bookList");

    bookList.innerHTML = "";

    for (const book of books) {
        if (!book.isIssued) {
            const li = document.createElement("li");
            li.textContent = `${book.title} by ${book.author} (ISBN: ${book.ISBN})`;
            bookList.appendChild(li);
        }
    }

    if (bookList.children.length === 0) {
        bookList.textContent = "No books are currently available.";
    }
}

function findBook(ISBN) {
    return books.find(function(book) {
        return book.ISBN === ISBN;
    });
}

document.getElementById("issueBtn").addEventListener("click", function() {
    const ISBN = document.getElementById("isbn").value.trim();
    const message = document.getElementById("message");
    const book = findBook(ISBN);

    if (!book) {
        message.textContent = "Book not found. Please check the ISBN.";
    } else {
        message.textContent = book.issueBook();
    }

    displayBooks();
    console.log(message.textContent);
});

document.getElementById("returnBtn").addEventListener("click", function() {
    const ISBN = document.getElementById("returnIsbn").value.trim();
    const message = document.getElementById("message");
    const book = findBook(ISBN);

    if (!book) {
        message.textContent = "Book not found. Please check the ISBN.";
    } else {
        message.textContent = book.returnBook();
    }

    displayBooks();
    console.log(message.textContent);
});

displayBooks();
