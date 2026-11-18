class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance = this.#balance + amount;
        return "Amount deposited: Rs. " + amount;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error("Insufficient balance!");
        }

        this.#balance = this.#balance - amount;

        return "Amount withdrawn: Rs. " + amount;
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(1000);
let output = document.getElementById("result");

output.innerHTML += "<p>Initial Balance: Rs. " + account.getBalance() + "</p>";
output.innerHTML += "<p>" + account.deposit(500) + "</p>";

output.innerHTML += "<p>Balance after deposit: Rs. " + account.getBalance() + "</p>";
output.innerHTML += "<p>" + account.withdraw(200) + "</p>";

output.innerHTML += "<p>Balance after withdrawal: Rs. " + account.getBalance() + "</p>";

try {
    output.innerHTML += "<p>" + account.withdraw(2000) + "</p>";
}
catch (error) {
    output.innerHTML += "<p>Error: " + error.message + "</p>";
}

output.innerHTML += "<h3>Final Balance: Rs. " + account.getBalance() + "</h3>";