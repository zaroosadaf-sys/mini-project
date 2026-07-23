function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let message = document.getElementById("message");

    if(name=="" || email=="" || password=="" || confirm==""){
        message.innerHTML="Please fill all fields.";
        return false;
    }

    if(password !== confirm){
        message.innerHTML="Passwords do not match.";
        return false;
    }

    alert("Sign Up Successful!");
    window.location.href="./form.html"
    return true;
}