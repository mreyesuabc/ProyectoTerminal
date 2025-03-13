// Creamos un arreglo vacío para almacenar los datos del formulario
let registros = [];
let usuarios = JSON.parse(localStorage.getItem("usuario")) || [];
//constructor
function Usuario(nombre, apPaterno,apMaterno, usuarioApp, correo, rfc,homoclave,municipio){
    this.nombre = nombre;
    this.apPaterno=apPaterno;
    this.apMaterno=apMaterno;
    this.usuarioApp= usuarioApp;
    this.correo=correo;
    this.rfc=rfc;
    this.homoclave=homoclave;
    this.municipio=municipio;
}


//get the inputs from HTML
const inputNombre = document.getElementById('nombre');
const inputapPaterno = document.getElementById('apPaterno');
const inputapMaterno = document.getElementById('apMaterno');
const inputUsuarioApp = document.getElementById('usuarioApp');
const inputCorreo = document.getElementById('correo');
const inputRfc = document.getElementById('rfc');
const inputHomoclave = document.getElementById('homoclave');
const inputMunicipio = document.getElementById('municipio');
// Selección de elementos HTML
const btnGuardar = document.getElementById('btnGuardar');
const formRegistro = document.getElementById('formRegistro');
const tablaConsulta = document.getElementById('tablaConsulta').getElementsByTagName('tbody')[0];
function registerUsr(){
    if (inputNombre.value === ""){
        alert("Ingresa nombre de usuario");
        return;
    }
    // crear objeto
    let newUsuario = new Usuario(inputNombre.value,inputapPaterno.value,inputapMaterno.value,inputUsuarioApp.value,
        inputCorreo.value,inputRfc.value,inputHomoclave.value,inputMunicipio.value);
 
 // Guardamos el objeto en el arreglo
 registros.push(newUsuario);

// Guardamos en el LocalStorage
localStorage.setItem("usuarios", JSON.stringify(usuarios));

 // Actualizamos la tabla de consulta
 mostrarDatos();
// Limpiamos el formulario
formRegistro.reset();
}

// Función para mostrar los datos guardados en la tabla
function mostrarDatos() {
    // Limpiamos el contenido previo de la tabla
    tablaConsulta.innerHTML = '';

    // Recorremos el arreglo de registros y agregamos filas a la tabla
    registros.forEach((registro, index) => {
        const row = tablaConsulta.insertRow();
        Object.values(registro).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });

        // Agregamos una celda para el botón eliminar
        const deleteCell = row.insertCell();
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'btn btn-warning';
        deleteButton.onclick = () => deleteUsr(index);
        deleteCell.appendChild(deleteButton);
    });
     // Guardamos los datos en el localStorage
     localStorage.setItem('registros', JSON.stringify(registros));
}
// Función para eliminar un registro específico
function deleteUsr(index) {
    // Eliminamos el registro del arreglo
    registros.splice(index, 1);
    // Actualizamos el localStorage
    localStorage.setItem('registros', JSON.stringify(registros));
    // Actualizamos la tabla
    mostrarDatos();
}
// Función para cargar los datos desde el localStorage
function cargarDatos() {
    const datosGuardados = localStorage.getItem('registros');
    if (datosGuardados) {
        registros = JSON.parse(datosGuardados);
    }
    mostrarDatos();
}
// Llamamos a cargarDatos cuando la página se cargue
window.onload = cargarDatos;

function login(){
    // agregar la lógica de autenticación (pendiente)
    // verificar credenciales de usuario (pendiente)

    // Si la autenticación es exitosa, redirige al usuario
    window.location.href = '/proyecto/views/menu.html';
}






// funcion para enviar una alerta en el html usuario a traves de mostrar un div
/* function mostrarAlerta(tipo) {
    var alerta1 = document.getElementById('alert1');
    var alerta2 = document.getElementById('alert2');
    var alerta3 = document.getElementById('alert3');
    if (tipo === 1) {
        alerta1.style.display = 'block';
        setTimeout(function() {
            alerta1.style.display = 'none';
        }, 1000);
    
    } else if (tipo === 2) {
        alerta2.style.display = 'block';
        setTimeout(function() {
            alerta2.style.display = 'none';
        }, 1000);
    } else if (tipo===3){
        alerta3.style.display = 'block';
        setTimeout(function() {
            alerta3.style.display = 'none';
        }, 1000);
    }
}
 */
// Evento de clic en el botón "Guardar"
//btnGuardar.addEventListener('click', registerUsr);
