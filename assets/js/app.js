function showSiderBar() {
    document.querySelector('#sidebar').classList.toggle('open')
    document.querySelector('#layerblur').classList.toggle('left-0')
    document.querySelector('#layerblur').classList.toggle('backdrop-blur-md')
}

let submitForm = document.getElementById('ValidationForm');
let Name = document.getElementById('name');
let phoneNumber = document.getElementById('number');
let email = document.getElementById('mail');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

let nameError1 = "Please enter your name";
let nameError2 = "It cannot contain special characters";
let phoneError1 = "Please enter your phone number";
let phoneError2 = "Enter a valid phone number";
let emailError1 = "Please enter your email address";
let emailError2 = "Enter a valid email address";
let passwordError1 = "Please enter your password";
let passwordError2 = "password are contains at least 8 characters,one uppercase letter, one number,and one special character";
let passwordError3 = "Password are not matches"

let nameRegex = /^[A-Za-z]+$/;
let phoneNumberRegex = /^[0-9]{10}$/;
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
function validate(field, Regex, Error1, Error2, event) {
    if (field.value == "") {
        event.preventDefault();
        field.nextElementSibling.innerHTML = Error1;
        return false;
    }
    else if (!field.value.match(Regex)) {
        event.preventDefault();
        field.nextElementSibling.innerHTML = Error2;
        return false;
    }
    else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}
function checkPassword(event) {
    if (confirmPassword.value == "") {
        event.preventDefault();
        confirmPassword.nextElementSibling.innerHTML = passwordError1;
        return false;
    }
    if (password.value != confirmPassword.value) {
        event.preventDefault();
        confirmPassword.nextElementSibling.innerHTML = passwordError3;
        return false;
    }
    else {
        confirmPassword.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validateFrom(e) {
    validate(Name, nameRegex, nameError1, nameError2, e)
    validate(phoneNumber, phoneNumberRegex, phoneError1, phoneError2, e)
    validate(email, emailRegex, emailError1, emailError2, e)
    validate(password, passwordRegex, passwordError1, passwordError2, e)
    validate(confirmPassword, passwordRegex, passwordError1, passwordError3, e)
    checkPassword(e);
    return true;
}

submitForm.addEventListener('submit', validateFrom);