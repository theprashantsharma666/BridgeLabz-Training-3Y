// Password Checker
let Password = "     gla@234532"

function myPasswordChecker(password){
    password = password.trim();

    let upper = false;
    let lower = false;
    let digit = false;
    let special = false;
    
    if(password.length < 6) {
        console.log("Incorrect Password Format");
        return;
    } 

    for (let i = 0; i < password.length; i++) {
        let ch = password.charAt(i);
        if (ch >= 'A' && ch <= 'Z') {
            upper = true;
        } else if (ch >= 'a' && ch <= 'z') {
            lower = true;
        } else if (ch >= '0' && ch <= '9') {
            digit = true;
        } else {
            special = true;
        }
    }

    if(upper && lower && digit && special){
        return true;
    } 
    return false;

}

console.log(myPasswordChecker(Password));