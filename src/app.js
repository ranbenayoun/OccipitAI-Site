// This file contains the JavaScript code for the landing page.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log('Form submitted:', data);
            alert('Thank you for your submission!');
            form.reset();
        });
    }

    // Smooth fade-in on scroll
    const fadeEls = document.querySelectorAll('.fade-in');
    const reveal = () => {
        fadeEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                el.classList.add('visible');
            }
        });
    };
    reveal();
    window.addEventListener('scroll', reveal);

    // Smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});