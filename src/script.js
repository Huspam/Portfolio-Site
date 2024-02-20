function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function flyPlane() {
    const plane = document.querySelector('.plane');
    plane.classList.add('flying');

    plane.addEventListener('animationend', function() {
        plane.classList.remove('flying');
    });
}

function sendEmail() {
    window.location.href = "mailto:husam.solachuddin@gmail.com";
}

document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById('logo');
    logo.classList.add('loaded');
});