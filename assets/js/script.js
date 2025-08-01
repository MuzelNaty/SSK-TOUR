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

// Carousel functionality - mantém layout original
function initCarousel(carouselId, prevBtnId, nextBtnId) {
  const carousel = document.getElementById(carouselId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);
  
  if (!carousel || !prevBtn || !nextBtn) return;
  
  const items = carousel.querySelectorAll('li');
  let currentIndex = 0;
  
  // Ativa o modo carousel apenas quando necessário
  function activateCarousel() {
    carousel.classList.add('carousel-active');
    items.forEach((item, index) => {
      item.classList.toggle('active', index === currentIndex);
    });
  }
  
  // Mostra todos os itens (layout original)
  function deactivateCarousel() {
    carousel.classList.remove('carousel-active');
    items.forEach(item => {
      item.classList.remove('active');
    });
  }
  
  // Se há poucos itens, não ativa o carousel
  if (items.length <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    return;
  }
  
  // Ativa o carousel
  activateCarousel();
  
  function goToPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }
  
  function goToNext() {
    if (currentIndex < items.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  }
  
  function updateCarousel() {
    items.forEach((item, index) => {
      item.classList.toggle('active', index === currentIndex);
    });
    updateArrows();
  }
  
  prevBtn.addEventListener('click', goToPrev);
  nextBtn.addEventListener('click', goToNext);
  
  // Keyboard navigation
  prevBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goToPrev();
    }
  });
  
  nextBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goToNext();
    }
  });
  
  // Show/hide arrows based on current position
  function updateArrows() {
    const isPrevDisabled = currentIndex === 0;
    const isNextDisabled = currentIndex === items.length - 1;
    
    prevBtn.style.opacity = isPrevDisabled ? '0.5' : '1';
    prevBtn.style.cursor = isPrevDisabled ? 'not-allowed' : 'pointer';
    prevBtn.setAttribute('aria-disabled', isPrevDisabled);
    
    nextBtn.style.opacity = isNextDisabled ? '0.5' : '1';
    nextBtn.style.cursor = isNextDisabled ? 'not-allowed' : 'pointer';
    nextBtn.setAttribute('aria-disabled', isNextDisabled);
  }
  
  // Auto-rotate (opcional - descomente se quiser rotação automática)
  // setInterval(() => {
  //   if (currentIndex < items.length - 1) {
  //     goToNext();
  //   } else {
  //     currentIndex = 0;
  //     updateCarousel();
  //   }
  // }, 5000);
  
  updateArrows(); // Initial call
}

// Initialize all carousels
document.addEventListener('DOMContentLoaded', function() {
  initCarousel('hotels-carousel', 'hotels-prev', 'hotels-next');
  initCarousel('destinations-carousel', 'destinations-prev', 'destinations-next');
  initCarousel('gallery-carousel', 'gallery-prev', 'gallery-next');
});
