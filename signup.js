function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var terms = document.getElementById("terms").checked;

    if(name == "" || email == "" || phone == "" || password == "" || confirm == ""){
        alert("Please fill all the fields.");
    }

    if(password != confirm){
        alert("Passwords do not match.");
    }

    if(terms == false){
        alert("Please accept the Terms & Conditions.");
    }

    alert("Sign Up Successful!");
    return true;
}

function showPassword() {

    var pass = document.getElementById("password");
    var con = document.getElementById("confirm");

    if(pass.type == "password"){
        pass.type = "text";
        con.type = "text";
    }
    else{
        pass.type = "password";
        con.type = "password";
    }
    window.location.href="./form.html"
}