document.addEventListener("DOMContentLoaded", function () {

    const offeringList = document.querySelector(".offering-list");
    const sortSelect = document.getElementById("sort");

    const cards = Array.from(
        offeringList.querySelectorAll(".offering-card")
    );

    // Display offerings in random order
    function shuffleCards() {
        const shuffledCards = [...cards];

        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [shuffledCards[i], shuffledCards[j]] =
                [shuffledCards[j], shuffledCards[i]];
        }

        shuffledCards.forEach(card => offeringList.appendChild(card));
    }

    // Sort offerings
    function sortCards(sortType) {
        const sortedCards = [...cards];

        sortedCards.sort((a, b) => {

            const nameA = a.querySelector("h2").textContent.trim();
            const nameB = b.querySelector("h2").textContent.trim();

            const priceA = parseFloat(
                a.querySelector(".offering-price").textContent
            );

            const priceB = parseFloat(
                b.querySelector(".offering-price").textContent
            );

            switch (sortType) {

                case "price-low":
                    return priceA - priceB;

                case "price-high":
                    return priceB - priceA;

                case "name-az":
                    return nameA.localeCompare(nameB);

                case "name-za":
                    return nameB.localeCompare(nameA);
            }
        });

        sortedCards.forEach(card => offeringList.appendChild(card));
    }

    // Initial random order
    shuffleCards();

    // Handle sorting selection
    sortSelect.addEventListener("change", function () {
        sortCards(this.value);
    });

});
