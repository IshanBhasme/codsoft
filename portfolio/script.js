// =========================
// Typing Effect
// =========================

const roles = [
  "Full Stack Developer",
  "Java Developer",
  "React Developer",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function type() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex++);
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex--);
  }

  let speed = 120;

  if (!isDeleting && charIndex === currentRole.length + 1) {
    speed = 1500;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 300;
  }

  setTimeout(type, speed);
}

type();


// =========================
// Scroll To Top Button
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});

topBtn.onclick = () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

};


// =========================
// Mobile Menu
// =========================

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

  if (navLinks.style.display === "flex") {

    navLinks.style.display = "none";

  } else {

    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "80px";
    navLinks.style.right = "20px";
    navLinks.style.background = "#112e42";
    navLinks.style.padding = "20px";
    navLinks.style.borderRadius = "12px";
    navLinks.style.gap = "20px";

  }

});


// =========================
// Navbar Shadow
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    header.style.boxShadow = "0 0 15px rgba(0,0,0,0.4)";
  } else {
    header.style.boxShadow = "none";
  }

});


// =========================
// Reveal Sections on Scroll
// =========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }

  });

}, {
  threshold: 0.2
});

sections.forEach(section => {

  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";

  observer.observe(section);

});