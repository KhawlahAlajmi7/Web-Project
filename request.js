
const form = document.querySelector("form.request");
const requestsDiv = document.getElementById("requests");
let requests = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const offering = document.getElementById("offering").value;
    const name = document.getElementById("fullname").value.trim();
    const date = document.getElementById("date").value;
    const errors = [];

    // Validate offering
    if (offering === "") {
        errors.push("- Please select an offering.");
    }

    // Validate full name
    if (name === "") {
        errors.push("- Please enter your full name.");
    } else if (!/^[A-Za-z\u0600-\u06FF]+(\s+[A-Za-z\u0600-\u06FF]+)+$/.test(name)) {
        errors.push("- Please enter a valid full name using letters only (first and last name).");
    }

    // Validate preferred date
    if (date === "") {
        errors.push("- Please select your preferred date.");
    } else {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        const todayString = `${year}-${month}-${day}`;

        if (date <= todayString) {
            errors.push("- Preferred date must be after today.");
        }
    }

    // Display validation errors
    if (errors.length > 0) {
        alert("Please correct the following:\n\n" + errors.join("\n"));
        return;
    }

    // Confirm successful request
    const stay = confirm(
        "Your request has been submitted successfully!\n\n" +
        "Click OK to stay on this page and add another request.\n" +
        "Click Cancel to return to the Member Hub."
    );

    if (!stay) {
        window.location.href = "MemberHub.html";
        return;
    }

    requests.push({
        offering: offering,
        name: name,
        date: date
    });

    showRequests();
    form.reset();
});

// Display all new requests
function showRequests() {
    requestsDiv.innerHTML = "<h2>Your New Requests</h2>";

    requests.forEach(function (r, i) {
        const p = document.createElement("p");

        p.textContent = (i + 1) + ". Offering: " + r.offering +
            " | Member: " + r.name +
            " | Preferred Date: " + r.date;

        requestsDiv.appendChild(p);
    });
}
 
