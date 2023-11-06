const passwordBox = document.getElementById("password");
        const toggleIcon = document.getElementById("toggle");

        passwordBox.addEventListener("input", function() {
            toggleIcon.style.display = passwordBox.value ? "block" : "none";
        });

        toggleIcon.addEventListener("click", function() {
            if (passwordBox.type === "password") {
                passwordBox.type = "text"; // Show password
                toggleIcon.classList.remove("fa-eye");
                toggleIcon.classList.add("fa-eye-slash");
            } else {
                passwordBox.type = "password"; // Hide password
                toggleIcon.classList.remove("fa-eye-slash");
                toggleIcon.classList.add("fa-eye");
            }
        });

    const registrationForm = document.querySelector("form");
    const firstnameField = document.getElementById("firstname");
    const lastnameField = document.getElementById("lastname");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");

    registrationForm.addEventListener("submit", function(event) {
        let isValid = true;

        // Validate first name
        if (!isValidName(firstnameField.value)) {
            alert("First name should not contain numbers.");
            isValid = false;
        }

        // Validate last name
        if (!isValidName(lastnameField.value)) {
            if (isValid) {
                alert("Last name should not contain numbers.");
                isValid = false;
            }
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
            if (isValid) {
                alert("Please enter a valid Email Address.");
                isValid = false;
            }
        }

        // Validate password constraints
        if (!isValidPassword(passwordField.value)) {
            if (isValid) {
                alert("Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.");
                isValid = false;
            }
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function isValidName(name) {
        return /^[A-Za-z]+$/.test(name);
    }

    function isValidPassword(password) {
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        return passwordPattern.test(password);
    }