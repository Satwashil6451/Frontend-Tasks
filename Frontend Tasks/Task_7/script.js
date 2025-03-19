//script file (script.js)
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let form = this;
    let errorMessages = [];

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const errorMessagesContainer = document.getElementById('errorMessages');
    errorMessagesContainer.innerHTML = '';

    if (name === '') {
        errorMessages.push('Name is required.');
        form.querySelector('#name').classList.add('is-invalid');
    } else {
        form.querySelector('#name').classList.remove('is-invalid');
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessages.push('Please enter a valid email address.');
        form.querySelector('#email').classList.add('is-invalid');
    } else {
        form.querySelector('#email').classList.remove('is-invalid');
    }

    if (password.length < 6) {
        errorMessages.push('Password must be at least 6 characters long.');
        form.querySelector('#password').classList.add('is-invalid');
    } else {
        form.querySelector('#password').classList.remove('is-invalid');
    }

    if (errorMessages.length > 0) {
        errorMessages.forEach(message => {
            const errorItem = document.createElement('p');
            errorItem.textContent = message;
            errorMessagesContainer.appendChild(errorItem);
        });
    } else {
        alert('Form submitted successfully!');
    }
});
