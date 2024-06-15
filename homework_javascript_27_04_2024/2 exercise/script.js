const form = document.getElementById('registrationForm');

const savedData = JSON.parse(localStorage.getItem('registrationData'));
if (savedData) {
    form.firstName.value = savedData.firstName || ''
    form.lastName.value = savedData.lastName || ''
    form.email.value = savedData.email || ''
    form.password.value = savedData.password || ''
}

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const formData = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        password: form.password.value
    };
    localStorage.setItem('registrationData', JSON.stringify(formData))

});