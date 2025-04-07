// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize animations
  initAnimations();
  
  // Initialize contact form if exists
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    initContactForm();
  }

  // Initialize mobile menu toggle
  initMobileMenu();
});

// Animations
function initAnimations() {
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });
}

// Contact Form Validation
function initContactForm() {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === '') {
      nameError.classList.remove('hidden');
      isValid = false;
    } else {
      nameError.classList.add('hidden');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailError.classList.remove('hidden');
      isValid = false;
    } else {
      emailError.classList.add('hidden');
    }

    // Message validation
    if (messageInput.value.trim() === '') {
      messageError.classList.remove('hidden');
      isValid = false;
    } else {
      messageError.classList.add('hidden');
    }

    // If valid, show success and reset
    if (isValid) {
      alert('Thank you for your message! I will get back to you soon.');
      form.reset();
    }
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const menuButton = document.createElement('button');
  menuButton.innerHTML = '<i class="fas fa-bars"></i>';
  menuButton.className = 'md:hidden text-2xl text-gray-700';
  menuButton.id = 'mobileMenuButton';
  
  const nav = document.querySelector('nav');
  if (nav) {
    nav.insertBefore(menuButton, nav.lastElementChild);
    
    const navLinks = nav.querySelector('div:last-child');
    navLinks.classList.add('hidden', 'md:flex');
    
    menuButton.addEventListener('click', function() {
      navLinks.classList.toggle('hidden');
      navLinks.classList.toggle('flex');
      navLinks.classList.toggle('flex-col');
      navLinks.classList.toggle('absolute');
      navLinks.classList.toggle('top-16');
      navLinks.classList.toggle('left-0');
      navLinks.classList.toggle('right-0');
      navLinks.classList.toggle('bg-white');
      navLinks.classList.toggle('p-4');
      navLinks.classList.toggle('shadow-md');
    });
  }
}

// Project Modal (Will be implemented when needed)
function showProjectDetails(projectId) {
  // Implementation for project modals
  console.log(`Showing details for project ${projectId}`);
}