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
      searchIcon.src = "images/InShot_20250916_152541121.png"; 
      searchIcon.classList.add("close-icon");
    } else {
      navLinks.classList.remove("search-active");
      searchBox.value = "";
      searchIcon.src = "images/search.png"; // back to search icon
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

// Arrows
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

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
  const prevButton = document.querySelector('.event-arrow.left');
  const nextButton = document.querySelector('.event-arrow.right');
  const dotsContainer = document.querySelector('.event-dots');

  if (!trackEl || items.length === 0 || !dotsContainer) {
    console.warn('Event slider: required elements not found.');
    return;
  }

  let currentIndex = 0;
  const total = items.length;

  // create pager buttons (unique names)
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
    // clamp index
    index = ((index % total) + total) % total;
    trackEl.style.transform = `translateX(-${index * 100}%)`;
    pagerButtons.forEach((b, idx) => {
      b.classList.toggle('event-dot-active', idx === index);
    });
  }

  // Next / Prev handlers
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % total;
    goToSlide(currentIndex);
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + total) % total;
    goToSlide(currentIndex);
  });

  // Optional: keyboard support (left/right)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevButton.click();
    if (e.key === 'ArrowRight') nextButton.click();
  });

  // ensure starting position
  goToSlide(0);

  let autoplay = setInterval(() => {
    currentIndex = (currentIndex + 1) % total;
    goToSlide(currentIndex);
  }, 5000); 

  const carouselEl = document.querySelector('.events-carousel');
  if (carouselEl) {
    carouselEl.addEventListener('mouseenter', () => clearInterval(autoplay));
    carouselEl.addEventListener('mouseleave', () => {
      autoplay = setInterval(() => {
        currentIndex = (currentIndex + 1) % total;
        goToSlide(currentIndex);
      }, 4000);
    });
  }

});


  document.querySelectorAll('.event-item img').forEach(img => {
    img.addEventListener('click', () => {
      window.location.href = "gallery.html";
    });
  });
