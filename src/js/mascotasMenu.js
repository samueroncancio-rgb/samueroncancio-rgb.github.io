const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('.links');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('visible');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Cerrar al hacer click en el overlay
overlay.addEventListener('click', () => {
    menu.classList.remove('visible');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
});


