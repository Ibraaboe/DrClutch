document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    
    form.addEventListener('submit', (event) => {
        form.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');
    });
    
    // Example animation for form appearance
    form.style.transition = 'opacity 1s ease-in-out';
    form.style.opacity = '1';
    
    // Additional animations can be added as needed
});

