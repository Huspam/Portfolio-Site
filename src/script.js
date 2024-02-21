function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// function flyPlane() {
//     const plane = document.querySelector('.plane');
//     plane.classList.add('flying');

//     plane.addEventListener('animationend', function() {
//         plane.classList.remove('flying');
//     });
// }

function sendEmail() {
    window.location.href = "mailto:husam.solachuddin@gmail.com";
}

window.addEventListener('scroll', function() {
    var logoContainer = document.querySelector('.logo-container');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        logoContainer.classList.add('fixed');
    } else {
        logoContainer.classList.remove('fixed');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById('logo');
    logo.classList.add('loaded');
});

const pfp = document.querySelector('.main-pfp');

function getRandomBorderRadius() {
    const tlh = 40 + Math.random() * 55;
    const trh = 40 + Math.random() * 55;
    const brh = 35 + Math.random() * 55;
    const blh = 45 + Math.random() * 55;
    const tlv = 40 + Math.random() * 55;
    const trv = 40 + Math.random() * 55;
    const brv = 40 + Math.random() * 55;
    const blv = 40 + Math.random() * 55;
    return `${tlh}% ${trh}% ${brh}% ${blh}% / ${tlv}% ${trv}% ${brv}% ${blv}%`;
}


function applyRandomBorderRadius() {
    pfp.style.borderRadius = getRandomBorderRadius();
}

applyRandomBorderRadius();
setInterval(applyRandomBorderRadius, 2000);