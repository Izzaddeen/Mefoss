document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let form = event.target;
    let formData = new FormData(form);
    
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Your message has been sent successfully.');
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data['errors'].map(error => error['message']).join(", "));
                } else {
                    alert('Oops! There was a problem submitting your form.');
                }
            });
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form.');
    });
});
