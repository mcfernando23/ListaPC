function agregarProblema() {
    var nombrePc = document.getElementById('nombrePc').value;
    var problema = document.getElementById('problema').value;

    // Validar que ambos campos estén llenos
    if (nombrePc === '' || problema === '') {
        alert('Por favor, complete ambos campos.');
        return;
    }

    // Obtener la referencia de la tabla
    var tabla = document.getElementById('tablaProblemas').getElementsByTagName('tbody')[0];

    // Crear una nueva fila y sus celdas
    var fila = tabla.insertRow(tabla.rows.length);
    var celdaNumero = fila.insertCell(0);
    var celdaNombrePc = fila.insertCell(1);
    var celdaProblema = fila.insertCell(2);
    var celdaResuelto = fila.insertCell(3);

    // Llenar las celdas con los valores ingresados
    celdaNumero.innerHTML = tabla.rows.length - 1;
    celdaNombrePc.innerHTML = nombrePc;
    celdaProblema.innerHTML = problema;

    // Crear una casilla de verificación para la columna "Resuelto"
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'resuelto';
    checkbox.value = 'resuelto';
    celdaResuelto.appendChild(checkbox);

    // Limpiar los campos del formulario
    document.getElementById('nombrePc').value = '';
    document.getElementById('problema').value = '';
}