function validateForm() {
    let valid = true;

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("countryError").textContent = "";
    document.getElementById("commentsError").textContent = "";

    // Name validation
    let name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }

    // Email validation
    let email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        valid = false;
    }

    // Password validation
    let password = document.getElementById("password").value;
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        valid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
        valid = false;
    }

    // Country validation
    let country = document.getElementById("country").value;
    if (country === "") {
        document.getElementById("countryError").textContent = "Country is required.";
        valid = false;
    }

    // Comments validation
    let comments = document.getElementById("comments").value;
    if (comments.length > 200) {
        document.getElementById("commentsError").textContent = "Comments must be less than 200 characters.";
        valid = false;
    }

    // Gender radio buttons validation
    let genderChecked = false;
    const genderRadios = document.getElementsByName("gender");
    for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            genderChecked = true;
            break;
        }
    }
    if (!genderChecked) {
        alert("Please select your gender.");
        valid = false;
    }

    return valid;
}
