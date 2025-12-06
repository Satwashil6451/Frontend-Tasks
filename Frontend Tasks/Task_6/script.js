/* script.js */

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let errorMessages = [];
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name === '') {
        errorMessages.push('Name is required.');
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (!emailPattern.test( email )) {
        errorMessages.push('Please enter a valid email address.');
    }

    if (password.length < 6) {
        errorMessages.push('Password must be at least 6 characters long.');
    }

    const errorMessagesContainer = document.getElementById('errorMessages');
    errorMessagesContainer.innerHTML = ''; 

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
