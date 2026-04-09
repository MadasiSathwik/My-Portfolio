// Typing Animation
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span>${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Initialize typing animation when DOM loads
document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".typed-text");
  const words = [
    "FrontEnd Development",
    "Backend Development",
    "Full Stack Mern Develeopment",
    "Data Science",
  ];
  const wait = 2000;

  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Scroll reveal animation
function revealOnScroll() {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = 150;

    if (sectionTop < window.innerHeight - sectionVisible) {
      section.classList.add("visible");
    }
  });
}

// Initial check
revealOnScroll();

// Check on scroll
window.addEventListener("scroll", revealOnScroll);

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Particle animation
function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";

  // Random starting position
  particle.style.left = Math.random() * 100 + "vw";

  // Random size
  const size = Math.random() * 4 + 2;
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  // Random animation duration
  particle.style.animationDuration = Math.random() * 6 + 4 + "s";

  // Random opacity
  particle.style.opacity = Math.random() * 0.5 + 0.2;

  // Random color
  const colors = [
    "rgba(255, 255, 255, 0.5)",
    "rgba(0, 229, 255, 0.5)",
    "rgba(180, 0, 255, 0.5)",
    "rgba(0, 229, 255, 0.3)",
  ];
  particle.style.background = colors[Math.floor(Math.random() * colors.length)];

  document.getElementById("particles").appendChild(particle);

  // Remove particle after animation
  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  }, 8000);
}

// Create particles continuously
setInterval(createParticle, 200);

// Form submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Simple validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields");
    return;
  }

  // Simulate form submission
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  setTimeout(() => {
    alert("Message sent successfully! I'll get back to you soon.");
    contactForm.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 2000);
});

// 3D Tilt Effect on Elements
document.querySelectorAll(".project-card, .skill-category, .glass-card, .profile-img").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation bounds (adjust 15 for more/less sensitivity)
    const rotateX = ((y - centerY) / centerY) * -15; 
    const rotateY = ((x - centerX) / centerX) * 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    card.style.transition = "none";
    card.style.zIndex = "10";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = "transform 0.5s ease";
    card.style.zIndex = "1";
  });
});

// Custom Cursor Implementation (for desktop)
if (window.innerWidth > 1024) {
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  const cursorTrail = document.createElement("div");
  cursorTrail.classList.add("cursor-trail");
  document.body.appendChild(cursorTrail);

  let curX = 0, curY = 0;
  let tgtX = 0, tgtY = 0;

  document.addEventListener("mousemove", (e) => {
    tgtX = e.clientX;
    tgtY = e.clientY;
    cursor.style.transform = `translate3d(calc(${tgtX}px - 50%), calc(${tgtY}px - 50%), 0)`;
  });

  function animateCursor() {
    curX += (tgtX - curX) * 0.15;
    curY += (tgtY - curY) * 0.15;
    cursorTrail.style.transform = `translate3d(calc(${curX}px - 50%), calc(${curY}px - 50%), 0)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll("a, button, .glass-card, .nav-link, input, textarea").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursorTrail.classList.add("hover");
      cursor.style.transform = `translate3d(calc(${tgtX}px - 50%), calc(${tgtY}px - 50%), 0) scale(1.5)`;
    });
    el.addEventListener("mouseleave", () => {
      cursorTrail.classList.remove("hover");
      cursor.style.transform = `translate3d(calc(${tgtX}px - 50%), calc(${tgtY}px - 50%), 0) scale(1)`;
    });
  });
}

// Animate numbers in about section
function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const current = Math.floor(progress * (end - start) + start);
    element.innerHTML = current + "+";
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Trigger number animation when about section is visible
const aboutSection = document.getElementById("about");
let numbersAnimated = false;

function checkAboutSection() {
  const aboutTop = aboutSection.getBoundingClientRect().top;

  if (aboutTop < window.innerHeight - 200 && !numbersAnimated) {
    const statNumbers = document.querySelectorAll(".stat-number");
    const values = [15, 3, 50];

    statNumbers.forEach((num, index) => {
      animateValue(num, 0, values[index], 2000);
    });

    numbersAnimated = true;
  }
}

window.addEventListener("scroll", checkAboutSection);

// Add active nav link highlighting
function highlightActiveNav() {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightActiveNav);

// Add CSS for active nav link
const style = document.createElement("style");
style.textContent = `
    .nav-link.active {
        color: #00E5FF;
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Bouncy Scroll Reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

// We wait a tiny bit after DOM load to attach classes so initial view isn't jumping
setTimeout(() => {
  document.querySelectorAll('.glass-card, .skill-category, .project-card, .contact-item').forEach((el, index) => {
    el.classList.add('hidden-element');
    // Add staggered delay based on index for siblings
    el.style.transitionDelay = `${(index % 4) * 0.1}s`;
    observer.observe(el);
  });
}, 100);

// Initialize everything when page loads
window.addEventListener("load", () => {
  // Add initial animations
  document.body.classList.add("loaded");

  // Create initial particles
  for (let i = 0; i < 10; i++) {
    setTimeout(() => createParticle(), i * 100);
  }
});
