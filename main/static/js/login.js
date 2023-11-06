const passwordField = document.getElementById("password");
        const toggleIcon = document.getElementById("toggle");

        passwordField.addEventListener("input", function() {
            toggleIcon.style.display = passwordField.value ? "block" : "none";
        });

        toggleIcon.addEventListener("click", function() {
            if (passwordField.type === "password") {
                passwordField.type = "text"; // Show password
                toggleIcon.classList.remove("fa-eye");
                toggleIcon.classList.add("fa-eye-slash");
            } else {
                passwordField.type = "password"; // Hide password
                toggleIcon.classList.remove("fa-eye-slash");
                toggleIcon.classList.add("fa-eye");
            }
        });