// Theme toggle and icon switching
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;
const sun = document.getElementById('sunIcon');
const moon = document.getElementById('moonIcon');

// I made this to let users toggle between light and dark mode
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');

  // Switch sun/moon visibility
  if (body.classList.contains('dark')) {
    sun.style.display = 'none';
    moon.style.display = 'block';
  } else {
    sun.style.display = 'block';
    moon.style.display = 'none';
  }

  // Update background and text for new theme
  updateCarousel(current); 
});

// Light theme carousel data array
const lightSlides = [
  {
    bg: "#CDB4DB",
    title: "Hi, I'm Sanjana",
    subtitle: "I'm a growing designer at NYU who sees beauty in contrast and believes design should feel alive.",
  },
  {
    bg: "#FFC8DD",
    title: "My favorite medium is the browser",
    subtitle: "I design clean, bold, and colorful websites — playful yet intentional spaces you’ll want to live in.",
  },
  {
    bg: "#BDE0FE",
    title: "I'm obsessed with colors",
    subtitle: "Colors tell stories. I love how they shift emotion and tone in even the simplest layouts.",
  },
  {
    bg: "#B2F7EF",
    title: "Like my plants, I'm always growing",
    subtitle: "From roots to leaves — I believe thoughtful design starts with care and a bit of love.",
  },
  {
    bg: "#BCF4DE",
    title: "I notice the little things",
    subtitle: "Design isn't just about looking good — it's about feeling right. That's where I find joy.",
  }
];

// Dark theme carousel data array
const darkSlides = [
  {
    bg: "#A4243B",
    title: "Hi, I'm Sanjana",
    subtitle: "I'm a growing designer at NYU who sees beauty in contrast and believes design should feel alive.",
  },
  {
    bg: "#600047",
    title: "My favorite medium is the browser",
    subtitle: "I design clean, bold, and colorful websites — playful yet intentional spaces you'll want to live in.",
  },
  {
    bg: "#0F4C5C",
    title: "I'm obsessed with colors",
    subtitle: "Colors tell stories. I love how they shift emotion and tone in even the simplest layouts.",
  },
  {
    bg: "#E36414",
    title: "Like my plants, I'm always growing",
    subtitle: "From roots to leaves — I believe thoughtful design starts with care and a bit of love.",
  },
  {
    bg: "#0094C6",
    title: "I notice the little things",
    subtitle: "Design isn't just about looking good — it's about feeling right. That's where I find joy.",
  }
];

// DOM elements for content + controls
let current = 0;
const title = document.querySelector('.carousel-title');
const subtitle = document.querySelector('.carousel-subtitle');
const dots = document.querySelectorAll('.dot');
const rightSection = document.querySelector('.right');

// Return the current theme’s slide set
function getSlides() {
  return document.body.classList.contains('dark') ? darkSlides : lightSlides;
}

// I update the carousel based on current slide index
function updateCarousel(index) {
  const slides = getSlides();
  current = index % slides.length;
  const slide = slides[current];
  title.textContent = slide.title;
  subtitle.textContent = slide.subtitle;
  rightSection.style.backgroundColor = slide.bg;

  // Active dot style
  dots.forEach(dot => dot.classList.remove('active'));
  dots[current].classList.add('active');
}

// Initialize carousel
updateCarousel(current);

// Rotate carousel every 10 seconds
setInterval(() => {
  updateCarousel((current + 1) % getSlides().length);
}, 10000);

// Manual dot navigation
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.dataset.index);
    updateCarousel(index);
  });
});

// I used MDN to understand how classList and event listeners work:
// classList → https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// addEventListener → https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

