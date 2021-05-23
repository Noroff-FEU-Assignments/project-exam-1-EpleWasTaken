const form = document.querySelector("#contact_form");

const submitSuccess = document.querySelector("#submitF");
const submitMessage = document.querySelector("h4");

const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

// Form validation

function  validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 5) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    } 

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(subject.value, 15) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkLength(message.value, 25) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    } 
    
    // Checks if all values are true, have to click twice(not sure why)

    if (
    checkLength(fullName.value, 5) &&
    validateEmail(email.value) &&
    checkLength(subject.value, 15) &&
    checkLength(message.value, 25) 
    ) {
        submitSuccess.addEventListener("click", () => {
            submitSuccess.innerText = "Sending...";


            setTimeout(() => {
                submitSuccess.innerText = "FORM SENT";
                submitSuccess.style.fontWeight = "600"
                submitSuccess.style.backgroundColor = "#2FFF60";
            }, 4000);
        });
    }
}
form.addEventListener("submit", validateForm);


// Check length of name, subject and message

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

// Check the regex for email

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternTest = regEx.test(email);
    return patternTest;
}