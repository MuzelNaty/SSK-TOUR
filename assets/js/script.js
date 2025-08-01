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

// Carousel functionality
function initCarousel(carouselId, prevBtnId, nextBtnId) {
  const carousel = document.getElementById(carouselId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);
  
  if (!carousel || !prevBtn || !nextBtn) return;
  
  const scrollAmount = 320; // Width of one item plus gap
  
  function scrollPrev() {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  }
  
  function scrollNext() {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
  
  prevBtn.addEventListener('click', scrollPrev);
  nextBtn.addEventListener('click', scrollNext);
  
  // Keyboard navigation
  prevBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollPrev();
    }
  });
  
  nextBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollNext();
    }
  });
  
  // Show/hide arrows based on scroll position
  function updateArrows() {
    const scrollLeft = carousel.scrollLeft;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    
    const isPrevDisabled = scrollLeft <= 0;
    const isNextDisabled = scrollLeft >= maxScroll;
    
    prevBtn.style.opacity = isPrevDisabled ? '0.5' : '1';
    prevBtn.style.cursor = isPrevDisabled ? 'not-allowed' : 'pointer';
    prevBtn.setAttribute('aria-disabled', isPrevDisabled);
    
    nextBtn.style.opacity = isNextDisabled ? '0.5' : '1';
    nextBtn.style.cursor = isNextDisabled ? 'not-allowed' : 'pointer';
    nextBtn.setAttribute('aria-disabled', isNextDisabled);
  }
  
  carousel.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
  updateArrows(); // Initial call
}

// Initialize all carousels
document.addEventListener('DOMContentLoaded', function() {
  initCarousel('hotels-carousel', 'hotels-prev', 'hotels-next');
  initCarousel('destinations-carousel', 'destinations-prev', 'destinations-next');
  initCarousel('gallery-carousel', 'gallery-prev', 'gallery-next');
});
