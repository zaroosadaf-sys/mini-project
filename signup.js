function validateForm(){

    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var password=document.getElementById("password").value;
    var confirm=document.getElementById("confirm").value;
    var terms=document.getElementById("terms").checked;

    (name=="" || email=="" || phone=="" || password=="" || confirm==""){
        alert("Please fill all fields");
    }

    (password!=confirm){
        alert("Passwords do not match")
    }

   if (terms==false){
        alert("Please accept Terms & Conditions");
    }

    alert("Sign Up Successful!");
}

function showPassword(){

    var pass=document.getElementById("password");

    if(pass.type=="password"){
        pass.type="text";
    }
    else{
        pass.type="password";
    }
    window.location.href="./form.html"
}

