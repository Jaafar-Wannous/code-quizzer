const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const authLinks = document.querySelectorAll(".auth-link");

registerForm.style.display = "none";

authLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = link.getAttribute("data-target");
        if (target === "register") {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
        } else if (target === "login") {
            registerForm.style.display = "none";
            loginForm.style.display = "block";
        }
    });
});

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find(user => user.email === email);

    if (userExists) {
        alert("User already exists!");
        return;
    }

    existingUsers.push({ email, password });
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("Registration successful! You can now log in.");

    registerForm.style.display = "none";
    loginForm.style.display = "block";
});

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (email === "admin@quiz.com" && password === "admin123") {
        alert("Welcome, Admin!");
        const user = { email: email, password: password};
        localStorage.removeItem("currentUser");
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "dashboard.html";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful!");
        localStorage.removeItem("currentUser");
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "home.html";
    } else {
        alert("Invalid credentials. Try again.");
    }
});
