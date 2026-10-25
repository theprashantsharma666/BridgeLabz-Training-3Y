"use strict";

function outer() {
    console.log("Outer count:", count);
    var count = 5;
    function inner() {
        console.log("Inner count:", count);
        var count = 10;
    }
    inner();
}

outer();


function outerArrowExample() {
    var count = 5;

    const innerArrow = () => {
        console.log("Arrow function count:", count);
    };
    innerArrow();
}

outerArrowExample();