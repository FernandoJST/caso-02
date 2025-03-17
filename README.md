# Centro de Soporte de Chat  

🔗 [Visita la página en GitHub Pages](https://fernandojst.github.io/caso-02/)  

Este proyecto es una landing page interactiva y responsiva basada en una imagen de referencia proporcionada. La página incluye múltiples funcionalidades dinámicas para mejorar la experiencia del usuario.

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica del sitio.
- **CSS**: Diseño responsivo y estilización avanzada.
- **JavaScript**: Interactividad y manipulación del DOM.
- **AOS (Animate on Scroll)**: Efectos de animación al hacer scroll.
- **LocalStorage**: Persistencia de configuración de idioma.

## Características Principales

- **Menú interactivo** con apertura y cierre en dispositivos móviles.
- **Carrusel de tarjetas** con desplazamiento fluido y soporte táctil.
- **Sección de preguntas frecuentes (FAQ)** con efectos de acordeón.
- **Cambio de idioma dinámico** (Español/Inglés) con persistencia de selección.
- **Diseño responsivo** optimizado para distintos dispositivos.

## Imagen de Referencia

![original-326d614aa4fef91444e18a51f423fea0-_1_](https://github.com/user-attachments/assets/acd2bad3-edc7-47ed-b7a9-c58ef2c07d2d)

## Desafíos y Soluciones

### 1️⃣ Menú interactivo en dispositivos móviles
- **Desafío:** Implementar un menú que pueda abrirse y cerrarse fluidamente en pantallas pequeñas.
- **Solución:** Se utilizó JavaScript para manejar eventos `click`, añadiendo y eliminando clases CSS para controlar la visibilidad del menú.

### 2️⃣ Carrusel de tarjetas con navegación táctil
- **Desafío:** Implementar un carrusel horizontal con botones de navegación y soporte para gestos táctiles.
- **Solución:** Se empleó `transform: translateX` para desplazar las tarjetas y se añadieron `touchstart` y `touchmove` para detectar gestos en dispositivos móviles.

### 3️⃣ Cambio de idioma dinámico
- **Desafío:** Permitir a los usuarios alternar entre Español e Inglés con persistencia de selección.
- **Solución:** Se implementó `localStorage` para almacenar el idioma elegido, y al cargar la página, se actualiza automáticamente el contenido en el idioma guardado.

## 📂 Estructura del Proyecto

```bash
📂 Caso-02
├── 📁 css
│   ├── styles.css
├── 📁 img
├── 📁 js
│   ├── menu.js
├── index.html
└── README.md
```

# Instalación y Uso
### 1️⃣ Clonar el repositorio
- git clone https://github.com/FernandoJST/caso-02.git

**Desarrollado por [FernandoJST](https://github.com/FernandoJST)**
