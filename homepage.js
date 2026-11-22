function changeTheme() {

    document.body.classList.toggle("dark-theme");

    let isDark = document.body.classList.contains("dark-theme");

    if (isDark) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    let button = document.getElementById("themeButton");

    if (button) {
        button.textContent = isDark ? "Light Theme" : "Dark Theme";
    }
}

// Apply the saved theme when any page loads
function loadTheme() {

    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    let button = document.getElementById("themeButton");

    if (button) {
        button.textContent =
            savedTheme === "dark" ? "Light Theme" : "Dark Theme";
    }
}

loadTheme();


window.onscroll = function () {
    showTopButton();
};

function showTopButton() {

    let button = document.getElementById("backToTop");

    if (window.scrollY > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }

}

function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}




function updateClock() {

    let now = new Date();

    let time = now.toLocaleTimeString();

    document.getElementById("clock").textContent = time;

}

updateClock();

setInterval(updateClock, 1000);
