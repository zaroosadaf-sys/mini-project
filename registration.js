document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let father = document.getElementById("father").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let dob = document.getElementById("dob").value;
    let course = document.getElementById("course").value;
    let address = document.getElementById("address").value;

    document.getElementById("result").innerHTML = `
        <h3>Registration Successful</h3>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Father Name:</strong> ${father}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Address:</strong> ${address}</p>
    `;

    document.getElementById("registrationForm").reset();
});