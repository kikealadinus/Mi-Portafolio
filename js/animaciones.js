/* 
    // Función para manejar la visibilidad
    const handleScrollAnimation = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            if (isVisible) {
                element.classList.add('visible'); // Agrega la clase visible cuando aparece en pantalla
            }
        });
    };

    // Escucha el evento de scroll y ejecuta la función
    window.addEventListener('scroll', handleScrollAnimation);

    // Llama a la función inicialmente para elementos visibles sin hacer scroll
    document.addEventListener('DOMContentLoaded', handleScrollAnimation);

 */