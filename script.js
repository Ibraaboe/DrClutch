let form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector("#sub").value = "Submitting...";
    let data = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbyBvlBo6-NoQ0XoOSCeee6WXuIp4fVRCyNLF0M2LHgmwWdSBaARqiopfASBj-dfpOAZ/exec', {
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

