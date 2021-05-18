const form = document.querySelector("#contact_form");

const submitForm = document.getElementById("submitF");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function  validateForm(event) {
    event.preventDefault();

    if (checkLength(name.value, 5) === true) {
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

    
}

form.addEventListener("submitForm", validateForm);


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternTest = regEx.test(email);
    return patternTest;
}



// const formSent = document.getElementById("submitF");

// formSent.addEventListener("click", () => {
//     if( === true) {
//         formSent.innerHTML = `Form sent`;
//         formSent.style.backgroundColor = "rgb(70, 255, 70)";
//     } else {
//         formSent.innerHTML = `Check error(s)`;
//         formSent.style.backgroundColor = "red";
//     }
// });