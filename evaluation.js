document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".evaluation-form");
    const offering = document.getElementById("offering");
    const feedback = document.getElementById("feedback");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        // Check selected offering
        if (offering.value === "") {
            alert("Please select a completed offering.");
            offering.focus();
            return;
        }

        // Check selected rating
        const selectedRating = document.querySelector(
            'input[name="rating"]:checked'
        );

        if (selectedRating === null) {
            alert("Please select a rating.");
            return;
        }

        // Check written feedback
        if (feedback.value.trim() === "") {
            alert("Please write your feedback.");
            feedback.focus();
            return;
        }

        // Check rating and display message
        if (Number(selectedRating.value) >= 3) {
            alert("Thank you for your positive feedback!");
        } else {
            alert("We are sorry your experience did not meet your expectations.");
        }

        // Redirect to Member Hub
        window.location.href = "MemberHub.html";

    });

});
