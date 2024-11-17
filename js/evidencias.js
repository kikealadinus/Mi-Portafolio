// Seleccionar los elementos
const galleryImages = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Crear un array con las imágenes y descripciones
const images = [
    { src: 'img/diploma1.jpg', description: 'Diploma en Ingeniería de Sistemas' },
    { src: 'img/proyecto1.jpg', description: 'Proyecto de Aplicación Web: Sistema de Gestión' },
    { src: 'img/certificado1.jpg', description: 'Certificado de Participación en Hackathon' }
];

// Variable para controlar la imagen actual mostrada
let currentIndex = 0;

// Función para abrir el modal
function openModal(index) {
    modal.style.display = 'block';
    modalImg.src = images[index].src;
    modalDescription.textContent = images[index].description;
    currentIndex = index;
}

// Función para cerrar el modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Función para mostrar la imagen anterior
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    modalImg.src = images[currentIndex].src;
    modalDescription.textContent = images[currentIndex].description;
});

// Función para mostrar la imagen siguiente
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    modalImg.src = images[currentIndex].src;
    modalDescription.textContent = images[currentIndex].description;
});

// Añadir el evento de click a las imágenes para abrir el modal
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => openModal(index));
});

// Cerrar el modal si se hace clic fuera de la imagen
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
