"use strict";

// Elementos do DOM
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const searchBtn = document.querySelector("[data-search-btn]");
const searchBar = document.querySelector("[data-search-bar]");
const searchClose = document.querySelector("[data-search-close]");
const favoritesBtn = document.querySelector("[data-favorites-btn]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

// Função para toggle do navbar
const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
};

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

// Funcionalidade da barra de pesquisa
if (searchBtn && searchBar && searchClose) {
  searchBtn.addEventListener("click", function () {
    searchBar.classList.add("active");
  });

  searchClose.addEventListener("click", function () {
    searchBar.classList.remove("active");
  });

  // Fechar pesquisa com ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && searchBar.classList.contains("active")) {
      searchBar.classList.remove("active");
    }
  });
}

// Funcionalidade dos favoritos
let favoritesCount = 0;
if (favoritesBtn) {
  favoritesBtn.addEventListener("click", function () {
    favoritesCount++;
    const badge = favoritesBtn.querySelector(".badge");
    if (badge) {
      badge.textContent = favoritesCount;
      // Animação de pulsação
      badge.style.transform = "scale(1.2)";
      setTimeout(() => {
        badge.style.transform = "scale(1)";
      }, 200);
    }
  });
}

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
