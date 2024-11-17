document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        loop: true, // Ciclo infinito
        autoplay: {
            delay: 5000, // Cambio automático cada 5 segundos
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade', // Efecto de desvanecimiento
        speed: 800, // Velocidad de transición en milisegundos
    });
});
