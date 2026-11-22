const form = document.querySelector("form.request");
const requestsDiv = document.getElementById("requests");
let requests = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const offering = document.getElementById("offering").value;
    const name = document.getElementById("fullname").value.trim();
    const date = document.getElementById("date").value;
    const errors = [];

    if (offering === "") {
        errors.push("- Please select an offering.");
    }

    if (name === "") {
        errors.push("- Full name is required.");
    } else if (!/^[A-Za-z\u0600-\u06FF]+(\s+[A-Za-z\u0600-\u06FF]+)+$/.test(name)) {
        errors.push("- Name must be a full name (at least two words) with letters only, no numbers or symbols like ? ! @.");
    }

    if (date === "") {
        errors.push("- Preferred date is required.");
    } else {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        const todayString = `${year}-${month}-${day}`;

        if (date <= todayString) {
            errors.push("- Preferred date must be in the future.");
        }
    }

    if (errors.length > 0) {
        alert("Please fix the following:\n" + errors.join("\n"));
        return;
    }

    const stay = confirm(
        "Your request has been sent successfully!\n\nPress OK to stay on this page, or Cancel to return to the Member Hub."
    );

    if (!stay) {
        window.location.href = "MemberHub.html";
        return;
    }

    requests.push({ offering: offering, name: name, date: date });
    showRequests();
    form.reset();
});

function showRequests() {
    requestsDiv.innerHTML = "<h2>Your New Requests</h2>";
    requests.forEach(function (r, i) {
        const p = document.createElement("p");
        p.textContent = (i + 1) + ". Offering: " + r.offering +
            " | Member: " + r.name +
            " | Date: " + r.date;
        requestsDiv.appendChild(p);
    });
}
