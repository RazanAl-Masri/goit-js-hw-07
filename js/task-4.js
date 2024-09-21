const form = document.querySelector('.login-form');
const mail = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (mail.value === "" || password.value === "") {
        alert('All form fields must be filled in');
    } else {
        const logInfo = {
            email: mail.value,
            password: password.value
        };
        console.log(logInfo);
    }
    form.reset();
});

