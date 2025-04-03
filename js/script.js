// Abrir e fechar Menu
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
});

// Alternar para o tema escuro
const themeButton = document.getElementById('theme-button');
const body = document.body;

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});