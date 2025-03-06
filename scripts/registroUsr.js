// Creamos un arreglo vacío para almacenar los datos del formulario
let registros = [];
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
    // crear objeto
    let newUsuario = new Usuario(inputNombre.value,inputapPaterno.value,inputapMaterno.value,inputUsuarioApp.value,
        inputCorreo.value,inputRfc.value,inputHomoclave.value,inputMunicipio.value);
   // Creamos un objeto con los datos
   /* const registro = {
    nombre,
    apPaterno,
    apMaterno,
    usuarioApp,
    correo,
    rfc,
    homoclave,
    municipio */
//};
 // Guardamos el objeto en el arreglo
 registros.push(newUsuario);

 // Limpiamos el formulario
 formRegistro.reset();

 // Actualizamos la tabla de consulta
 mostrarDatos();
}
// Función para mostrar los datos guardados en la tabla
function mostrarDatos() {
    // Limpiamos el contenido previo de la tabla
    tablaConsulta.innerHTML = '';

    // Recorremos el arreglo de registros y agregamos filas a la tabla
    registros.forEach(registro => {
        const row = tablaConsulta.insertRow();
        Object.values(registro).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });
}

// Evento de clic en el botón "Guardar"
//btnGuardar.addEventListener('click', registerUsr);
