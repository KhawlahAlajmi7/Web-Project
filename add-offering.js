document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".add-offering-form");

    const nameInput = document.getElementById("offering-name");
    const priceInput = document.getElementById("offering-price");
    const descriptionInput = document.getElementById("offering-description");
    const imageInput = document.getElementById("offering-image");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        // Validate empty fields
        if (
            nameInput.value.trim() === "" ||
            priceInput.value.trim() === "" ||
            descriptionInput.value.trim() === "" ||
            imageInput.files.length === 0
        ) {
            alert("Please fill in all fields.");
            return;
        }

        // Validate offering name
        if (/^\d/.test(nameInput.value.trim())) {
            alert("Offering name cannot start with a number.");
            nameInput.focus();
            return;
        }

        // Validate price
        if (priceInput.value.trim() === "" ||
            !Number.isFinite(Number(priceInput.value)) ||
            Number(priceInput.value) < 0) {

            alert("Please enter a valid price.");
            priceInput.focus();
            return;
        }

        // Validate image
        const imageFile = imageInput.files[0];

        if (!imageFile.type.startsWith("image/")) {
            alert("Please select an image file.");
            imageInput.focus();
            return;
        }

        // Read image and save offering
        const reader = new FileReader();

        reader.onload = function () {

            const newOffering = {
                name: nameInput.value.trim(),
                price: Number(priceInput.value),
                description: descriptionInput.value.trim(),
                image: reader.result
            };

            // Get previous offerings from Local Storage
            let offerings = JSON.parse(
                localStorage.getItem("offerings")
            ) || [];

            // Add the new offering
            offerings.push(newOffering);

            // Save all offerings
            localStorage.setItem(
                "offerings",
                JSON.stringify(offerings)
            );

            alert(
                newOffering.name + " has been added successfully!"
            );

            // Clear the form
            form.reset();
        };

        reader.onerror = function () {
            alert("Unable to read the selected image. Please try again.");
        };

        reader.readAsDataURL(imageFile);

    });

});
