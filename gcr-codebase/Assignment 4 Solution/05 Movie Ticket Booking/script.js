"use strict";

const bookingForm = document.getElementById("bookingForm");
const message = document.getElementById("message");
const ticketDetails = document.getElementById("ticketDetails");

const namePattern = /^[A-Za-z ]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);

    if (!namePattern.test(name)) {
        message.textContent = "Name must contain alphabets only.";
        ticketDetails.innerHTML = "";
        return;
    }

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        ticketDetails.innerHTML = "";
        return;
    }

    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        message.textContent = "Please select between 1 and 10 seats.";
        ticketDetails.innerHTML = "";
        return;
    }

    const booking = {
        name: name,
        email: email,
        seats: seats
    };

    message.textContent = "Ticket booked successfully!";

    ticketDetails.innerHTML = `
        <h2>Movie Ticket Details</h2>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Number of Seats:</strong> ${booking.seats}</p>
    `;

    console.log(booking);
});