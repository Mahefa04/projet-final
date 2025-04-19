document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.sign-in-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorContainer = document.getElementById('errorContaint');
    const button = document.getElementById('login-btn-id');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        errorContainer.innerHTML = ''; // Clear previous errors

        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const errors = [];

        // Check email format
        if (!email.endsWith('@gmail.com')) {
                errors.push('Email not valid');
                setTimeout(() => {
                    location.reload();
                }, 2000);
        }

        // Check password length
        if (password.length < 8) {
            errors.push('Password not valid');
            setTimeout(() => {
                location.reload();
            }, 2000);
        }

        // Display errors or success
        if (errors.length > 0) {
            errors.forEach(error => {
                const p = document.createElement('p');
                p.style.color = 'red';
                p.textContent = error;
                errorContainer.appendChild(p);
            });
        } else {
            const otherElement = document.createElement('p');
            otherElement.textContent = 'succes';
            otherElement.style.color = 'white';
            otherElement.style.backgroundColor = 'green';
            otherElement.style.borderRadius = '20px';
            otherElement.style.padding = '10px';
            errorContainer.appendChild(otherElement);
            button.innerHTML = '<input type="submit" value="......" id="login-btn">';
            setTimeout(() => {
                location.href = "../accueille/index.html";
            }, 1000)
        }
    });
});
