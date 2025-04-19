document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.sign-in-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const errorContainer = document.getElementById('errorContaint');
    const button = document.getElementById('login-btn-id');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        errorContainer.innerHTML = '';

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        let errors = [];


        if (username === '') {
            errors.push('Username cannot be empty');
            setTimeout(() => {
                location.reload();
            }, 2000);
        }

        if (!email.endsWith('@gmail.com')) {
            errors.push('Email not valid');
            setTimeout(() => {
                location.reload();
            }, 2000);
        }

        if (password.length < 8) {
            errors.push('Password not valid');
            setTimeout(() => {
                location.reload();
            }, 2000);
        }

        if (password !== confirmPassword) {
            errors.push('Passwords do not match');
            setTimeout(() => {
                location.reload();
            }, 2000);
        }

        if (errors.length > 0) {
            errors.forEach(error => {
                const element = document.createElement('p');
                element.style.color = 'red';
                element.textContent = error;
                errorContainer.appendChild(element);
            });
        } else {
            const otherElement = document.createElement('p');
            otherElement.textContent = 'succes';
            otherElement.style.color = 'white';
            otherElement.style.backgroundColor = 'green';
            otherElement.style.borderRadius = '20px';
            otherElement.style.padding = '10px';
            errorContainer.appendChild(otherElement);
            button.innerHTML = "<input type='submit' value='......' id='login-btn'ii>";
            setTimeout(() => {
                location.href = "../accueille/index.html";
            }, 1000)
        }
    });
});