//constructor
function Usuario(nombre,apPaterno,apMaterno,usrApp){
    this.nombre=nombre;
    this.apPaterno=apPaterno;
    this.apMaterno=apMaterno;
    this.usrApp=usrApp;
}
//get the inputs from HTML
const inputNombre = document.getElementById("txtNombre");
const inputapPaterno = document.getElementById("txtApPater");
const inputapMaterno = document.getElementById("txtApMater");
const inputusrApp = document.getElementById("txtUsrApp");

function register(){
    // crear objeto
    let newUsuario = new Usuario(inputNombre.value,inputapPaterno.value,inputapMaterno.value,inputusrApp.value);
    //desplegar el obj
    if( inputNombre.value == ""){
        alert("Ingresa el nombre");
    }else{
        display(newUsuario);
    }

}
function display(usuario){
    const list = document.getElementById("list");
    p=`
    <div> 
        <p>${usuario.nombre} - ${usuario.apPaterno}</p>
    </div>
    `;
    list.innerHTML+=p;// inserta en HTML
}

