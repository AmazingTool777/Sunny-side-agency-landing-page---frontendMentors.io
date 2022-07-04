// Navbar elements
const navbarToggler = document.getElementById("navbar-toggler");
const navbarLinks = document.getElementById("navbar-links");

// Navbar open state
let navbarIsOpen = false;

function handleNavbarToggle() {
    navbarIsOpen = !navbarIsOpen;
    if (navbarIsOpen) {
        navbarLinks.classList.remove("close");
        navbarLinks.style.display = "block";
        navbarLinks.classList.add("show");
    }
    else {
        navbarLinks.classList.remove("show");
        navbarLinks.classList.add("close");
        navbarLinks.onanimationend = function () {
            if (navbarLinks.classList.contains("close")) navbarLinks.style.display = "none";
        }
    }
}

// Show/Hide of the navbar links
navbarToggler.addEventListener("click", handleNavbarToggle);