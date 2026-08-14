window.onscroll = function () {
    toggleMenuBackground();
};

function toggleMenuBackground() {
    const menu = document.querySelector('.menu');
    if (window.scrollY > 50) { // Cuando el desplazamiento vertical es mayor a 50px
        menu.classList.add('scrolled'); // Añade la clase 'scrolled' para cambiar el fondo
    } else {
        menu.classList.remove('scrolled'); // Elimina la clase 'scrolled' cuando volvemos arriba
    }
}