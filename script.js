// NAVBAR SHADOW ON SCROLL

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
  } else {
    navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";
  }
});

// COUNTER ANIMATION

const counters = document.querySelectorAll(".stat-box h2");

const startCounter = () => {
  counters.forEach((counter) => {
    const target = parseInt(counter.innerText);

    let count = 0;

    const increment = target / 100;

    const updateCounter = () => {
      if (count < target) {
        count += increment;

        counter.innerText = Math.ceil(count) + "+";

        requestAnimationFrame(updateCounter);
      } else {
        if (target === 98) {
          counter.innerText = "98%";
        } else {
          counter.innerText = target + "+";
        }
      }
    };

    updateCounter();
  });
};

// RUN COUNTER WHEN SECTION VISIBLE

const statsSection = document.querySelector(".stats");

let started = false;

window.addEventListener("scroll", () => {
  const sectionTop = statsSection.offsetTop - 300;

  if (window.scrollY > sectionTop && !started) {
    startCounter();
    started = true;
  }
});

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
  ".card, .treatment-card, .testimonial, .about-content, .about-image",
);

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(50px)";
  element.style.transition = "all 0.8s ease";
});

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;

    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.style.opacity = "1";

      element.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// APPOINTMENT FORM

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Appointment Request Submitted Successfully!");

  form.reset();
});

// HERO BUTTON EFFECT

const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});

// PAGE LOAD ANIMATION

window.addEventListener("load", () => {
  document.body.style.opacity = "0";

  setTimeout(() => {
    document.body.style.transition = "opacity 1s ease";

    document.body.style.opacity = "1";
  }, 100);
});

// CURRENT YEAR AUTO UPDATE

const footer = document.querySelector("footer p");

if (footer) {
  footer.innerHTML = `© ${new Date().getFullYear()} Mother's Ortho Care. All Rights Reserved.`;
}
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});
const darkBtn = document.getElementById("darkToggle");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkBtn.innerText = "☀️";
  } else {
    darkBtn.innerText = "🌙";
  }
});
function bookDoctor(name) {
  alert("Booking appointment with " + name + "...");
}