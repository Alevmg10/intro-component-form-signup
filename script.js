const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(input, message) {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === '') {
        setError(firstName, 'First Name cannot be empty');
    } else {
        setSuccess(firstName);
    }

    if(lastNameValue === '') {
        setError(lastName, 'Last Name cannot be empty');
    }

    if(emailValue === '') {
        setError(email, 'Looks like this is not an email');
    } else if(!isEmail(emailValue)) {
        setError(email, 'Use valid email format')
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else {
        setSuccess(password);
    }
}

function setError(input, message) {
    const formControl = input.parentElement;
    const msg = formControl.querySelector('.msg');
    msg.innerText = message;
    formControl.classList.add('error');
    formControl.classList.add('msg');
    formControl.classList.remove('success');
}

function setSuccess(input) {
    const formControl = input.parentElement;
    const msg = formControl.querySelector('.msg');

    msg.innerText = '';
    formControl.classList.add('success');
    formControl.classList.remove('error');
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}