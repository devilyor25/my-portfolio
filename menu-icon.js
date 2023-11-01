// JavaScript to toggle the visibility of the navbar on menu icon click
const menuIcon = document.createElement('div');
menuIcon.className = 'menu-icon';
menuIcon.id = 'menu-icon';
menuIcon.innerHTML = '&#9776';

const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', function () {
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
        menuIcon.style.left = '0';
    } else {
        navbar.style.display = 'block';
        menuIcon.style.left = 'auto';
        menuIcon.style.right = '0';
    }
});

document.querySelector('.header').appendChild(menuIcon);
