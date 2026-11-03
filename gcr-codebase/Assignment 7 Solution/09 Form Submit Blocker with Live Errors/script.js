let myForm = document.getElementById("myForm");

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");

let success = document.getElementById("success");

function checkName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }

}

function checkEmail() {
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        return false;
    } 
    else if (!emailInput.value.includes("@")) {
        emailError.textContent = "Email must contain @";
        return false;
    } 
    else {
        emailError.textContent = "";
        return true;
    }
}

function checkPassword() {

    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

nameInput.addEventListener("input", checkName);
emailInput.addEventListener("input", checkEmail);
passwordInput.addEventListener("input", checkPassword);

myForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let validName = checkName();
    let validEmail = checkEmail();
    let validPassword = checkPassword();

    if (validName && validEmail && validPassword) {
        success.textContent = "Form Submitted Successfully";
        myForm.reset();
    } else {
        success.textContent = "";
    }
});