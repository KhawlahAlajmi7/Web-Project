document.addEventListener("DOMContentLoaded", function () {

    const offeringList = document.querySelector(".manager-offerings-section .offering-list");

    const savedOfferings = JSON.parse(localStorage.getItem("offerings")) || [];

    savedOfferings.forEach(function (offering) {

        const card = document.createElement("div");
        card.className = "offering-card";

        const image = document.createElement("img");
        image.src = offering.image;
        image.alt = offering.name;

        const details = document.createElement("div");
        details.className = "offering-details";

        const info = document.createElement("div");
        info.className = "offering-info";

        const type = document.createElement("span");
        type.className = "offering-type";
        type.textContent = "New Offering";

        const title = document.createElement("h2");
        title.textContent = offering.name;

        const description = document.createElement("p");
        description.textContent = offering.description;

        const price = document.createElement("span");
        price.className = "manager-price";
        price.textContent = offering.price === 0
            ? "Free"
            : offering.price + " SAR";

        info.appendChild(type);
        details.appendChild(info);
        details.appendChild(title);
        details.appendChild(description);
        details.appendChild(price);

        card.appendChild(image);
        card.appendChild(details);

        offeringList.appendChild(card);
    });

});
