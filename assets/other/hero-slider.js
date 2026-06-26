/* =========================================================
   BULADEV + ASA Hero Slider
   ---------------------------------------------------------
   Lightweight vanilla JavaScript. It only controls the hero
   background image rotation on pages where .hero-slider exists.
   No other design section or interaction is modified.
   ========================================================= */
(function () {
  "use strict";

  var slider = document.querySelector(".hero-slider");
  if (!slider) return;

  var slides = slider.querySelectorAll(".hero-slide");
  if (slides.length <= 1) return;

  var currentIndex = 0;
  var delay = 5600; // 5.6s interval: slow/professional, not flashy.

  function showSlide(nextIndex) {
    slides[currentIndex].classList.remove("is-active");
    currentIndex = nextIndex;
    slides[currentIndex].classList.add("is-active");
  }

  // Respect reduced-motion users: keep the first hero image static.
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  window.setInterval(function () {
    showSlide((currentIndex + 1) % slides.length);
  }, delay);
})();
