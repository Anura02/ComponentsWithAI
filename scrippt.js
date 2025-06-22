// Navigation toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Close menu when clicking a link (for mobile)
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
    }
  });
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Active link based on scroll position
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav-links li a[href*=${sectionId}]`).classList.add('active');
    } else {
      document.querySelector(`.nav-links li a[href*=${sectionId}]`).classList.remove('active');
    }
  });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Form validation
    if (!name || !email || !message) {
      alert('Please fill out all required fields');
      return;
    }
    
    // You would normally send this data to a server
    console.log('Form submitted:', { name, email, subject, message });
    
    // Reset form
    contactForm.reset();
    
    // Show success message
    alert('Thanks for your message! We will get back to you soon.');
  });
}

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input').value;
    
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    
    // You would normally send this data to a server
    console.log('Newsletter subscription:', { email });
    
    // Reset form
    newsletterForm.reset();
    
    // Show success message
    alert('Thanks for subscribing to our newsletter!');
  });
}

// Scroll to Top Button Functionality
const scrollToTopButton = document.getElementById('scrollToTop');

// Show button when page is scrolled down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.parentElement.classList.add('visible');
    } else {
        scrollToTopButton.parentElement.classList.remove('visible');
    }
});

// Smooth scroll to top when button is clicked
scrollToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Theme toggler functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Function to set theme
function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('digistudio-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('digistudio-theme', 'light');
  }
}

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('digistudio-theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set initial theme
if (savedTheme) {
  setTheme(savedTheme);
} else if (prefersDark) {
  setTheme('dark');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Set Home link as active by default
  document.querySelector('.nav-links li a').classList.add('active');
});