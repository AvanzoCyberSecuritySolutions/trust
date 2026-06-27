// Toggle mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const searchToggle = document.getElementById("search-toggle");
  const searchBox = document.getElementById("search-box");
  const searchIcon = document.querySelector(".search-icon");

  let searchOpen = false;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  searchToggle.addEventListener("click", (e) => {
    e.preventDefault();
    searchOpen = !searchOpen;

    if (searchOpen) {
      navLinks.classList.add("search-active");
      searchBox.focus();
      searchIcon.src = "/assets/images/misc/close-icon.png"; 
      searchIcon.classList.add("close-icon");
    } else {
      navLinks.classList.remove("search-active");
      searchBox.value = "";
      searchIcon.src = "/assets/images/misc/search-icon.png"; // back to search icon
      searchIcon.classList.remove("close-icon");
    }
  });
});

// Shrink header on scroll 
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});



let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      dots[i].classList.add("active");
    }
  });
}


function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Auto slide (optional)
setInterval(nextSlide, 5000);


// Dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const trackEl = document.querySelector('.event-track');
  const items = Array.from(document.querySelectorAll('.event-item'));
  const dotsContainer = document.querySelector('.event-dots');

  if (!trackEl || items.length === 0 || !dotsContainer) {
    return;
  }

  let currentIndex = 0;
  const total = items.length;

  // create pager buttons
  const pagerButtons = [];
  for (let i = 0; i < total; i++) {
    const btn = document.createElement('button');
    if (i === 0) btn.classList.add('event-dot-active');
    btn.setAttribute('aria-label', 'Slide ' + (i + 1));
    dotsContainer.appendChild(btn);
    pagerButtons.push(btn);

    // click handler for this dot
    btn.addEventListener('click', (e) => {
      currentIndex = i;
      goToSlide(currentIndex);
    });
  }

  function goToSlide(index) {
    index = ((index % total) + total) % total;
    trackEl.style.transform = `translateX(-${index * 100}%)`;
    pagerButtons.forEach((b, idx) => {
      b.classList.toggle('event-dot-active', idx === index);
    });
  }

  goToSlide(0);

  let autoplay = setInterval(() => {
    currentIndex = (currentIndex + 1) % total;
    goToSlide(currentIndex);
  }, 5000);

  // Pause on hover
  const sliderEl = document.querySelector('.event-slider');
  if (sliderEl) {
    sliderEl.addEventListener('mouseenter', () => clearInterval(autoplay));
    sliderEl.addEventListener('mouseleave', () => {
      autoplay = setInterval(() => {
        currentIndex = (currentIndex + 1) % total;
        goToSlide(currentIndex);
      }, 5000);
    });
  }
});


  document.querySelectorAll('.event-item img').forEach(img => {
    img.addEventListener('click', () => {
      window.location.href = "/gallery/";
    });
  });

  // Intersection Observer for scroll animations
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

