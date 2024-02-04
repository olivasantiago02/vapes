
function filtrarProductos(categoria) {
    // Obtener todos los productos
    var productos = document.querySelectorAll('.producto');


    // Mostrar u ocultar productos según la categoría seleccionada
    productos.forEach(function(producto) {
        if (categoria === 'todos' || producto.getAttribute('data-categoria') === categoria) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
  // Obtener todos los productos
  var productos = document.querySelectorAll('.producto');

  // Agregar evento clic a las imágenes de productos
  productos.forEach(function(producto) {
      var imagen = producto.querySelector('.card-img-top');

      imagen.addEventListener('click', function() {
          // Alternar la clase 'expanded' para cambiar el tamaño de la imagen
          imagen.classList.toggle('expanded');

          // Obtener la categoría del producto
          var categoria = producto.getAttribute('data-categoria');

          // Llama a la función para filtrar productos con la categoría correspondiente
          filtrarProductos(categoria);
      });
  })});

  document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos con la clase 'logo-link'
    var logos = document.querySelectorAll('.logos-section .logo-link');

    // Función para agregar la clase 'show' de manera secuencial
    function showLogosSequentially(index) {
      if (index < logos.length) {
        logos[index].classList.add('show');
        // Llama recursivamente a la función para el siguiente logo después de un breve retraso
        setTimeout(function() {
          showLogosSequentially(index + 1);
        }, 200); // Puedes ajustar el valor del retraso según tus preferencias
      }
    }

    // Inicia la animación llamando a la función para el primer logo
    showLogosSequentially(0);
  });