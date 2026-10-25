"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];

for (let i = 0; i < rawData.length; i++) { 
    const lineNumber = i + 1;

    try {
        const record = JSON.parse(rawData[i]);

        if (!("user" in record) || !("age" in record)) {
            throw new Error("Missing required user or age field");
        }

        record.age = Number(record.age);

        if (!Number.isFinite(record.age)) {
            throw new Error("Age must be a valid number");
        }
        cleanData.push(record);

        console.log("Line " + lineNumber + ": Valid record");
    } catch (error) {
        console.log("Line " + lineNumber + ": Error - " + error.message);
    }
}

console.log("Clean data:", cleanData);

const under18 = cleanData.filter(function(record) {
    return record.age < 18;
});

console.log("Users under 18:", under18);