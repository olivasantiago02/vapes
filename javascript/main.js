js
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
    var producto = document.querySelector('.producto');
    var imagen = producto.querySelector('.card-img-top');

    imagen.addEventListener('click', function() {
      // Alternar la clase 'expanded' para cambiar el tamaño de la imagen
      imagen.classList.toggle('expanded');
    });
  });