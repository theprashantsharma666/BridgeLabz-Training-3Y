// Task 2 - Generate random hex code value
// background-color : #000000
// background-color : #ffffff

function generateHexColor() {
    let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let ans = "#";

    for (let i = 0; i < 6; i++) {
        ans += arr[Math.floor(Math.random() * arr.length)];
    }

    console.log(ans);
    document.body.style.backgroundColor = ans;
}

generateHexColor();