"use strict";
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

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

// Sistema de paginação para hotéis
document.addEventListener("DOMContentLoaded", function() {
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const pageIndicator = document.getElementById("pageIndicator");
  const hotelPages = document.querySelectorAll(".hotel-page");
  
  let currentPage = 1;
  const totalPages = hotelPages.length;
  
  function updatePagination() {
    // Ocultar todas as páginas
    hotelPages.forEach(page => {
      page.classList.remove("active");
    });
    
    // Mostrar página atual
    const currentPageElement = document.querySelector(`[data-page="${currentPage}"]`);
    if (currentPageElement) {
      currentPageElement.classList.add("active");
    }
    
    // Atualizar indicador de página
    pageIndicator.textContent = `${currentPage} / ${totalPages}`;
    
    // Controlar estado dos botões
    prevButton.disabled = (currentPage === 1);
    nextButton.disabled = (currentPage === totalPages);
    
    // Adicionar classes visuais para botões desabilitados
    if (currentPage === 1) {
      prevButton.classList.add("disabled");
    } else {
      prevButton.classList.remove("disabled");
    }
    
    if (currentPage === totalPages) {
      nextButton.classList.add("disabled");
    } else {
      nextButton.classList.remove("disabled");
    }
  }
  
  function nextPage() {
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
      
      // Animação suave para a seção de hotéis
      const hotelsContainer = document.querySelector(".hotels-container");
      if (hotelsContainer) {
        hotelsContainer.scrollIntoView({ 
          behavior: "smooth", 
          block: "nearest" 
        });
      }
    }
  }
  
  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
      
      // Animação suave para a seção de hotéis
      const hotelsContainer = document.querySelector(".hotels-container");
      if (hotelsContainer) {
        hotelsContainer.scrollIntoView({ 
          behavior: "smooth", 
          block: "nearest" 
        });
      }
    }
  }
  
  // Event listeners para os botões
  if (nextButton) {
    nextButton.addEventListener("click", nextPage);
  }
  
  if (prevButton) {
    prevButton.addEventListener("click", prevPage);
  }
  
  // Navegação por teclado (opcional)
  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      prevPage();
    } else if (event.key === "ArrowRight") {
      nextPage();
    }
  });
  
  // Inicializar paginação
  updatePagination();
});
