// Zoom al pasar el ratón sobre los logotipos de afiliaciones
const afiliacionItems = document.querySelectorAll('.afiliacion-item');

afiliacionItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        const logo = item.querySelector('.afiliacion-logo');
        logo.style.transform = "scale(1.1)";
        logo.style.transition = "transform 0.3s";
    });
    
    item.addEventListener('mouseout', () => {
        const logo = item.querySelector('.afiliacion-logo');
        logo.style.transform = "scale(1)";
    });
});
