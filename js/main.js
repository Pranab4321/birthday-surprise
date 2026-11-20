
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

// Show or hide password

togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.setAttribute("aria-label", "Hide password");
    } else {
        passwordInput.type = "password";
        togglePassword.setAttribute("aria-label", "Show password");
    }

});

// Prevent page reload for now

document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();

    // Password verification will be implemented later.
});
