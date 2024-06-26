document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        Name: document.getElementById('name').value,
        Number: document.getElementById('number').value,
        Age: document.getElementById('age').value,
        CarBrand: document.getElementById('carBrand').value,
        CarModel: document.getElementById('carModel').value,
        Year: document.getElementById('year').value
    };

    console.log('Submitting form data:', formData); // Log form data for debugging

    fetch('https://script.google.com/macros/s/AKfycbzddBy5KEeDNi36kKXiev8mzXdHpGUu6HKrpTTRTvEXTbG_zVu5drRRClbYc2IiVvAf/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())  // Parse JSON response
    .then(result => {
        console.log('Response:', result);
        if (result.result === 'success') {
            document.getElementById('contactForm').classList.add('hidden');
            document.getElementById('thankYouMessage').classList.remove('hidden');
        } else {
            console.error('Unexpected response:', result);
        }
    })
    .catch(error => console.error('Error:', error));
});

