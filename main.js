const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

/* ScrollReveal animations - enhanced */
const scrollRevealOption = {
  origin: "bottom",
  distance: "60px",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  reset: false,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
  distance: "100px",
  duration: 1400,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 600,
  distance: "40px",
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 900,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 200,
  distance: "40px",
});

ScrollReveal().reveal(".journey__card", {
  ...scrollRevealOption,
  interval: 200,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
  distance: "80px",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 500,
  interval: 150,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 800,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 200,
  distance: "30px",
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 200,
});

ScrollReveal().reveal(".client__card", {
  ...scrollRevealOption,
  interval: 150,
});

/* Enhanced Swiper with autoplay & pagination */
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 4200,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  grabCursor: true,
  effect: "slide",
  speed: 700,
});

/* 3D Tilt effect on destination cards */
const cards = document.querySelectorAll(".destination__card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)";
  });
});

/* Optional: gentle mouse influence on plane (subtle, additive feel) */
const headerImage = document.querySelector(".header__image img");
if (headerImage) {
  let mouseX = 0, mouseY = 0;
  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) / 80;
    mouseY = (e.clientY - window.innerHeight / 2) / 80;
  });
  // The CSS animation handles the main float; we leave transform free for it
}

/* Nav shadow on scroll */
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    nav.style.boxShadow = "0 4px 30px rgba(0,0,0,0.08)";
  } else {
    nav.style.boxShadow = "0 2px 20px rgba(0,0,0,0.05)";
  }
});
