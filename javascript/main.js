
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