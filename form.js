<<<<<<< HEAD
let correctUsername="aqsakhan";
let correctPassword="password1";



function login(){
let enteredUsername=document.getElementById("username").value; 
let enteredPassword=document.getElementById("password").value;
 if(enteredUsername === correctUsername,enteredPassword===correctPassword){
       console.log("our credentials are=",enteredPassword ,"and", enteredUsername);
       alert("Login Successfull");
       window.location.href="home.html"
 }

 
 else{
    alert("wrong credentials")
 }
}
 function clearData(){
 document.getElementById("username").value ="";
 document.getElementById("password").value ="";
       alert("cleared successfull");
=======
function showMessage(){
alert("login successfull!");
window.location.href="./registration.html"
>>>>>>> 8c47af31a75970b87b4bef675bae8f4036b544c9

}