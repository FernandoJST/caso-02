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

  const featureSections = document.querySelectorAll('.features-section');
  featureSections.forEach((slider) => {
    let isDown = false;
    let startX;
    let scrollLeft;
  
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('dragging');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
  
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('dragging');
    });
  
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('dragging');
    });
  
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });
  
    // Eventos táctiles
    slider.addEventListener('touchstart', (e) => {
      isDown = true;
      slider.classList.add('dragging');
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
  
    slider.addEventListener('touchend', () => {
      isDown = false;
      slider.classList.remove('dragging');
    });
  
    slider.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });
  });
  
  /********** LÓGICA PARA MOSTRAR/OCULTAR RESPUESTAS FAQ **********/
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = question.querySelector('i');
  
    question.addEventListener('click', () => {
      // Alterna el display de la respuesta
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
      } else {
        answer.style.display = 'block';
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.cards-wrapper');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
  
    const cards = wrapper.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth + 20; 
    const visibleCards = 3; 
    const totalCards = cards.length;
  
    let currentPosition = 0;
 
    let maxPosition = -(cardWidth * (totalCards - visibleCards));
  
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
  
  document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("language-toggle");
    let lang = localStorage.getItem("language") || "es";
  
    function switchLanguage(applyOnly = false) {
      if (!applyOnly) {
        lang = lang === "es" ? "en" : "es";
        localStorage.setItem("language", lang);
      }
  
      document.querySelectorAll("[data-lang-es]").forEach(el => {
        if (el.innerHTML.includes("<br>") || el.innerHTML.includes("<span")) {
          el.innerHTML = lang === "es" ? el.dataset.langEs : el.dataset.langEn;
        } else {
          el.childNodes.forEach(node => {
            if (node.nodeType === 3 && node.nodeValue.trim() !== "") {
              node.nodeValue = lang === "es" ? el.dataset.langEs + " " : el.dataset.langEn + " ";
            }
          });
        }
      });
  
      const langToggleText = langToggle.querySelector("a").childNodes[0];
      if (langToggleText.nodeType === 3) {
        langToggleText.nodeValue = lang === "es" ? "Inglés" : "Español";
      }
    }
  
    langToggle.addEventListener("click", function (event) {
      event.preventDefault();
      switchLanguage();
    });
  
    switchLanguage(true); 
  });  