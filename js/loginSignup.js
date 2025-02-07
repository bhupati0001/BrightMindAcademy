function toggleForm() {
    document.getElementById("login-form").classList.toggle("hidden");
    document.getElementById("signup-form").classList.toggle("hidden");
}

function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    
    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    return true;
}

// Prevent form submission if validation fails
document.getElementById("signupForm").addEventListener("submit", function (event) {
    if (!validatePassword()) {
        event.preventDefault();
    }
});
function toggleForm() {
    document.getElementById("login-form").classList.toggle("hidden");
    document.getElementById("signup-form").classList.toggle("hidden");
}

function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    
    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    return true;
}

// Prevent form submission if validation fails
document.getElementById("signupForm").addEventListener("submit", function (event) {
    if (!validatePassword()) {
        event.preventDefault();
    }
});
