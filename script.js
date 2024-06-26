document.getElementById('nextButton').addEventListener('click', function() {
    document.querySelector('.step-1').classList.remove('active');
    document.querySelector('.step-2').classList.add('active');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Optionally, you can handle the submission here if needed
    console.log('Form submitted');
});


