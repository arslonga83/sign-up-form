const pwd1 = document.querySelector("#pwd");
const pwd2 = document.querySelector("#pwd2");
const button = document.querySelector("#submit");
const verify = document.querySelector("#pwd-verify");

button.addEventListener('click', () => {
    if (pwd1.value == pwd2.value) {
        return;
    }
    else {
        alert('Please make sure passwords match');
    }
})

pwd2.addEventListener('input', () => {
    if (pwd1.value == pwd2.value) {
        pwd2.style.borderColor = "green"
        verify.textContent = "";
    }
    else {
        pwd2.style.borderColor = "red";
        verify.textContent = "Passwords do not match";
    }
})

pwd1.addEventListener('input', () => {
    if (pwd1.value == pwd2.value) {
        pwd2.style.borderColor = "green"
        verify.textContent = "";
    }
    else {
        pwd2.style.borderColor = "red";
        verify.textContent = "Passwords do not match";
    }
})



