// Funcionalidad de deslizador para Certificados
const certificadoSlider = document.querySelector('.certificados-slider');
const certificadoPrevBtn = document.querySelector('.certificados-slider-container .prev-btn');
const certificadoNextBtn = document.querySelector('.certificados-slider-container .next-btn');

certificadoPrevBtn.addEventListener('click', () => {
    certificadoSlider.scrollBy({
        left: -certificadoSlider.offsetWidth,
        behavior: 'smooth',
    });
});

certificadoNextBtn.addEventListener('click', () => {
    certificadoSlider.scrollBy({
        left: certificadoSlider.offsetWidth,
        behavior: 'smooth',
    });
});

// Funcionalidad de deslizador para Cartas
const cartaSlider = document.querySelector('.cartas-slider');
const cartaPrevBtn = document.querySelector('.cartas-slider-container .prev-btn');
const cartaNextBtn = document.querySelector('.cartas-slider-container .next-btn');

cartaPrevBtn.addEventListener('click', () => {
    cartaSlider.scrollBy({
        left: -cartaSlider.offsetWidth,
        behavior: 'smooth',
    });
});

cartaNextBtn.addEventListener('click', () => {
    cartaSlider.scrollBy({
        left: cartaSlider.offsetWidth,
        behavior: 'smooth',
    });
});
