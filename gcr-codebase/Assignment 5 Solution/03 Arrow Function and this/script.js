"use strict";

const user = {
    name: "Prashant",

    showName: () => {
        console.log("Arrow function name:", this.name);
    }
};

user.showName();

user.showName = function() {
    console.log("Normal function name:", this.name);
};

user.showName();