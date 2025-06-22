// ==== Navigation Toggle ====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
  
  // Accessibility toggle
  const isExpanded = hamburger.classList.contains('open');
  hamburger.setAttribute('aria-expanded', isExpanded);
});

// ==== Close Menu on Link Click (Mobile) ====
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});

// ==== Throttle Utility Function ====
function throttle(fn, wait) {
  let time = Date.now();
  return function () {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  };
}

// ==== Scroll Behavior ====
const header = document.querySelector('.header');
const sections = document.querySelectorAll('section[id]');
const scrollToTopBtn = document.getElementById('scrollToTop');

const onScroll = () => {
  const scrollY = window.scrollY;

  // Header effect
  if (scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Active section link
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const link = document.querySelector(`.nav-links li a[href*="${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Scroll-to-top button
  if (scrollToTopBtn) {
    if (scrollY > 300) {
      scrollToTopBtn.style.opacity = '1';
      scrollToTopBtn.style.pointerEvents = 'auto';
    } else {
      scrollToTopBtn.style.opacity = '0';
      scrollToTopBtn.style.pointerEvents = 'none';
    }
  }
};

window.addEventListener('scroll', throttle(onScroll, 150));

// ==== Contact Form Submission ====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    console.log('Form submitted:', { name, email, subject, message });
    contactForm.reset();
    alert('Thanks for your message! We will get back to you soon.');
  });
}

// ==== Newsletter Form Submission ====
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = this.querySelector('input').value.trim();

    if (!email) {
      alert('Please enter your email address.');
      return;
    }

    console.log('Newsletter subscription:', { email });
    newsletterForm.reset();
    alert('Thanks for subscribing to our newsletter!');
  });
}

// ==== Scroll to Top Button ====
if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==== Initialize on Page Load ====
document.addEventListener('DOMContentLoaded', () => {
  window.dispatchEvent(new Event('scroll')); // highlight correct nav link
});

