let form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector("#sub").value = "Submitting...";
    let data = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbw-ta-bH309-UTe5YOt3UkH4268L6utYMXj9_K7aEIFF9_rzbvnF5h8NvTSi2huHnzx/exec', {
            method: "POST",
            body: data
        })
        .then(res => res.text())
        .then(data => {
            document.querySelector("#msg").innerHTML = data;
            document.querySelector("#sub").value = "Submit / إرسال";
            document.getElementById('contactForm').classList.add('hidden');
            document.getElementById('thankYouMessage').classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error:', error);
            document.querySelector("#sub").value = "Submit / إرسال";
            document.querySelector("#msg").innerHTML = "An error occurred. Please try again.";
        });
});

