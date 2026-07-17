// REGISTRATION FORM


const form = document.getElementById("registration-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Values from the form fields

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value.trim();

    const kinFirstName = document.getElementById("kin-first-name").value.trim();
    const kinLastName = document.getElementById("kin-last-name").value.trim();
    const relationship = document.getElementById("relationship").value.trim();
    const kinPhone = document.getElementById("kin-phone").value.trim();
    const kinEmail = document.getElementById("kin-email").value.trim();

    const accountType = document.getElementById("account-type").value;
    const idType = document.getElementById("id-type").value;
    const idNumber = document.getElementById("id-number").value.trim();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    const terms = document.getElementById("terms").checked;

   
    // VALIDATION
   

    if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        phone === "" ||
        gender === "" ||
        dob === "" ||
        address === "" ||
        kinFirstName === "" ||
        kinLastName === "" ||
        relationship === "" ||
        kinPhone === "" ||
        accountType === "" ||
        idType === "" ||
        idNumber === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        alert("Please complete all required fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (!terms) {
        alert("You must accept the Terms and Conditions.");
        return;
    }


    // CALCULATE AGE


    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const month = today.getMonth() - birthDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    // DISPLAY DETAILS
  

    const output = document.createElement("div");
    output.innerHTML = `
        <h3>Registration Successful!</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Account Type:</strong> ${accountType}</p>
        <p><strong>ID Type:</strong> ${idType}</p>
        <p>Thank you for registering.</p>
    `;
    form.parentElement.insertAdjacentElement("afterend", output);

    const requestData = {
        firstName,
        lastName,
        email,
        phone,
        gender,
        age,
        address,
        kinFirstName,
        kinLastName,
        relationship,
        kinPhone,
        kinEmail,
        accountType,
        idType,
        idNumber
    };

    fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Backend registration failed.");
        }
        return response.json();
    })
    .then((result) => {
        const output = document.createElement("div");
        output.innerHTML = `
            <h3>${result.message || "Registration Successful!"}</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Account Type:</strong> ${accountType}</p>
            <p><strong>ID Type:</strong> ${idType}</p>
            <p><strong>Backend ID:</strong> ${result.id || "N/A"}</p>
            <p>Thank you for registering.</p>
        `;
        form.parentElement.insertAdjacentElement("afterend", output);
    })
    .catch((error) => {
        const output = document.createElement("div");
        output.innerHTML = `
            <h3>Registration Error</h3>
            <p>${error.message}</p>
        `;
        form.parentElement.insertAdjacentElement("afterend", output);
    })
    .finally(() => {
        form.reset();
    });
});