document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const closeMenu = document.getElementById('close-menu');
    const navContainer = document.querySelector('.nav-container');
    const dropdowns = document.querySelectorAll('.dropdown');

    [btnMenu, closeMenu].forEach(btn => {
        btn.addEventListener('click', () => {
            navContainer.classList.toggle('active');
        });
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (event) => {
            event.preventDefault();
            const submenu = dropdown.nextElementSibling;

            dropdowns.forEach(d => {
                const otherSubmenu = d.nextElementSibling;
                if (otherSubmenu && otherSubmenu !== submenu) {
                    otherSubmenu.style.display = 'none';
                }
            });

            if (submenu) {
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});


const slider = document.querySelector('.features-section');
let isDown = false;
let startX;
let scrollLeft;

// Eventos del mouse
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('dragging');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('dragging');
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('dragging');
});

// Eventos táctiles
slider.addEventListener('touchstart', (e) => {
    isDown = true;
    slider.classList.add('dragging');
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchmove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('touchend', () => {
    isDown = false;
    slider.classList.remove('dragging');
});




$(document).ready(function() {
    $('.faq-question').click(function() {
        $(this).next('.faq-answer').slideToggle();

        // Alternar los iconos entre "+" y "-"
        var icon = $(this).find('i');
        if (icon.hasClass('fa-plus')) {
            icon.removeClass('fa-plus').addClass('fa-minus');
        } else {
            icon.removeClass('fa-minus').addClass('fa-plus');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.cards-wrapper');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    const cards = wrapper.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth + 20; // Incluye margen derecho
    const visibleCards = 3; // Número de tarjetas visibles
    const totalCards = cards.length;

    let currentPosition = 0;
    let maxPosition = -(cardWidth * (totalCards - visibleCards));

    // Ajustar dinámicamente el ancho del contenedor
    wrapper.style.width = `${totalCards * cardWidth}px`;

    function updatePosition() {
        wrapper.style.transform = `translateX(${currentPosition}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentPosition < 0) {
            currentPosition += cardWidth;
            updatePosition();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPosition > maxPosition) {
            currentPosition -= cardWidth;
            updatePosition();
        }
    });
});
