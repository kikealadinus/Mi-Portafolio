/* document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Evitar el envío normal del formulario

    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validación simple
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Validación de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Mostrar mensaje de éxito
    document.getElementById('form-status').textContent = 'Enviando...';

    // Aquí usarás un servicio de backend para enviar el correo, como Formspree o un script PHP.
    // Ejemplo usando Formspree (requiere cuenta de Formspree):
    fetch('https://formspree.io/f/yourFormID', {
        method: 'POST',
        body: new FormData(this),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('form-status').textContent = '¡Mensaje enviado con éxito!';
        document.getElementById('contact-form').reset();  // Resetear el formulario
    })
    .catch(error => {
        document.getElementById('form-status').textContent = 'Error al enviar el mensaje. Inténtalo de nuevo.';
    });
}); */

// Obtener todos los botones con la clase 'contact-toggle'
const contactButtons = document.querySelectorAll('.contact-toggle');
const contactFormPopup = document.getElementById('contact-form-popup');

// Función para mostrar el formulario
function showContactForm() {
    contactFormPopup.classList.add('show'); // Mostrar el formulario
}

// Asignar evento a cada botón de contacto
contactButtons.forEach(button => {
    button.addEventListener('click', showContactForm);
});

// Cerrar el formulario cuando se haga clic en el botón de cerrar
document.getElementById('contact-close').addEventListener('click', function() {
    contactFormPopup.classList.remove('show'); // Ocultar el formulario
});
