class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function() {
    return "Movie: " + this.movieName + "<br>Seat Number: " + this.seatNo + "<br>Ticket Price: Rs. " + this.price;
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

let ticket1 = new OnlineTicket("Avengers", "A10", 250, 30);

let output = document.getElementById("result");
output.innerHTML = "<h2>Movie Ticket Details</h2>";
output.innerHTML += ticket1.printTicket();
output.innerHTML += "<br>Convenience Fee: Rs. " + ticket1.convenienceFee;
output.innerHTML += "<br><b>Total Amount: Rs. " + ticket1.getTotalAmount() + "</b>";