// Función para detectar si un elemento es visible en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// Aplicar animaciones al hacer scroll
const animatedElements = document.querySelectorAll('.animate-on-scroll');

window.addEventListener('scroll', () => {
    animatedElements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        }
    });
});

// Activar animaciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    animatedElements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        }
    });
});