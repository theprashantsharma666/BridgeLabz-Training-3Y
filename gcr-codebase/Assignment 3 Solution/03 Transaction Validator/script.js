"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

for (const transaction of transactions) {
    try {
        if (transaction === null) {
            throw new Error("NullTransactionError: Transaction is null");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new Error("MissingDataError: ID or amount is missing");
        }

        if (transaction.amount < 0) {
            throw new Error("NegativeAmountError: Amount cannot be negative");
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id} is valid.`);

    } catch (error) {
        invalidTransactions.push({
            transaction: transaction,
            error: error.message
        });

        console.log(`Invalid transaction: ${error.message}`);
    }
}

console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);
console.log("Successful Count:", validTransactions.length);
console.log("Failed Count:", invalidTransactions.length);
