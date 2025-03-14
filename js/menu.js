document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById("btn-menu");
    const closeMenu = document.getElementById("close-menu");
    const navContainer = document.getElementById("nav-container");
    const dropdowns = document.querySelectorAll(".dropdown");
    const body = document.body;
  
    // Asegurarse de que el menú esté cerrado al cargar
    navContainer.classList.remove("active");
  
    // Abrir menú en móvil
    btnMenu.addEventListener("click", () => {
      navContainer.classList.add("active");
      body.classList.add("menu-open"); // Prevenir scroll de página
    });
  
    // Cerrar menú en móvil
    closeMenu.addEventListener("click", () => {
      navContainer.classList.remove("active");
      body.classList.remove("menu-open"); // Permitir scroll de página
    });
  
    // Cierra el menú si se hace clic fuera de él
    document.addEventListener("click", (event) => {
      const isClickInside = navContainer.contains(event.target) || btnMenu.contains(event.target);
      if (!isClickInside && navContainer.classList.contains("active")) {
        navContainer.classList.remove("active");
        body.classList.remove("menu-open");
      }
    });
  
    // Mostrar/ocultar submenús
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", (event) => {
        // Evita que el enlace recargue la página
        event.preventDefault();
        event.stopPropagation(); // Previene que el clic se propague
  
        const submenu = dropdown.nextElementSibling;
        // Cerrar otros submenús abiertos
        document.querySelectorAll(".submenu").forEach((sm) => {
          if (sm !== submenu) sm.style.display = "none";
        });
        // Alternar el submenú actual
        if (submenu) {
          submenu.style.display =
            submenu.style.display === "block" ? "none" : "block";
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
