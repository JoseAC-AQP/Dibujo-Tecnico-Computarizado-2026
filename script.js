// CONTROL INTERACTIVO DE LA INTERFAZ FORMATIVA

document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById('buscador-modulos');
    const tarjetasModulos = document.querySelectorAll('.modulo-card');

    // Función de filtrado en tiempo real para los módulos
    if(buscador) {
        buscador.addEventListener('input', (e) => {
            const terminoBusqueda = e.target.value.toLowerCase().trim();

            tarjetasModulos.forEach(tarjeta => {
                // Lee las palabras clave asociadas a la tarjeta en el atributo html data-keywords
                const palabrasClave = tarjeta.getAttribute('data-keywords').toLowerCase();
                const tituloTarjeta = tarjeta.querySelector('h3').textContent.toLowerCase();
                const descripcionTarjeta = tarjeta.querySelector('p').textContent.toLowerCase();

                // Evalúa si el término ingresado coincide con el título, descripción o palabras clave
                if (tituloTarjeta.includes(terminoBusqueda) || 
                    descripcionTarjeta.includes(terminoBusqueda) || 
                    palabrasClave.includes(terminoBusqueda)) {
                    tarjeta.style.display = 'flex'; // Muestra la tarjeta si hay coincidencia
                } else {
                    tarjeta.style.display = 'none'; // La oculta de forma fluida si no coincide
                }
            });
        });
    }
});