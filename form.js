let correctUsername = "admin";
let correctPassword = "12345";

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === correctUsername && password === correctPassword) {

        message.textContent = "Login Successful!";
        message.style.color = "green";

        window.location.href = "registration.html";

    } else {

        message.textContent = "Wrong Credentials!";
        message.style.color = "red";

    }

});