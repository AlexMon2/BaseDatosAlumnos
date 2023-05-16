//1.- Página principal (elementos)

//const alumnos = document.getElementById("alumnos");
const btnAgregar = document.getElementById("agregar");
const alta = document.querySelector(".alta");

//Hidden 
function darDeAlta() {
    alta.classList.remove("hidden");
    showAlumno.classList.add("hidden");
}

btnAgregar.addEventListener("click", darDeAlta);

//Cambiar de HTML
//function cambiarPagina() {
//    window.location.href = "index2.html";
//}

//alumnos.addEventListener("click", cambiarPagina);

//2.- Usar los datos del imput (alumnos)
//Clase vacía
class Estudiantes{
    constructor(nombre, apellido, edad, materias,){
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.materias = materias
    }
}
//Constructor vacío
class listaAlumnos{
    constructor(){
        this.lista =[]
    }
    //Método para agregar alumnos a la lista
    agregar(estudiante){
        this.lista.push(estudiante)
    }

    //Método pára buscar alumnos
    buscar(nombre){
        var listaAux = this.lista
        var alumnoEncontrado = null;

        for (let i = 0; i < listaAux.length; i++) {
            if(nombre === listaAux[i].nombre){
                alumnoEncontrado = listaAux[i];
                break; //Termina el bucle
            }
        }
        return alumnoEncontrado;
    }
}

//Recolectar la información del imput:
//Agregar a la lista
let listaEstudiante = new listaAlumnos();

function agregarEstudiantes() {
    let nombreAlumno = document.getElementById("aluname").value;
    let apellidoAlumno = document.getElementById("alulastname").value;
    let edadAlumno = document.getElementById("aluage").value;

    let alumno = new Estudiantes(nombreAlumno, apellidoAlumno, edadAlumno);
    listaEstudiante.agregar(alumno);

    actualizarTabla();
    actualizarListaAlumnos();
}

const btnAlta = document.querySelector("#btnAlta");
btnAlta.addEventListener("click", agregarEstudiantes);

//Mostrar la lista en HTML
function actualizarTabla() {
    let tablaBody = document.getElementById("tabla-body");
    tablaBody.innerHTML = "";

    for (let i = 0; i < listaEstudiante.lista.length; i++) {
        let estudiante = listaEstudiante.lista[i];
        
        let fila = document.createElement("tr");

        let columnaNombre = document.createElement("td");
        columnaNombre.textContent = estudiante.nombre;
        fila.appendChild(columnaNombre);

        let columnaApellido = document.createElement("td");
        columnaApellido.textContent = estudiante.apellido;
        fila.appendChild(columnaApellido);

        let columnaEdad = document.createElement("td");
        columnaEdad.textContent = estudiante.edad;
        fila.appendChild(columnaEdad);

        // Crear celdas para materias
        let columnaMaterias = document.createElement("td");
        fila.appendChild(columnaMaterias);

        // Crear celdas para calificaciones
        let columnaCalificaciones = document.createElement("td");
        fila.appendChild(columnaCalificaciones);

        //Mostrar materias y calificaciones
        for (let materia in estudiante.materias) {
            let materiaElement = document.createElement("p");
            materiaElement.textContent = materia;
            columnaMaterias.appendChild(materiaElement);
      
            let calificacionElement = document.createElement("p");
            calificacionElement.textContent = estudiante.materias[materia];
            columnaCalificaciones.appendChild(calificacionElement);
          }

        tablaBody.appendChild(fila);
    }
}
//Agregar estudiantes existentes (relleno) a la tabla
var aleStu = new Estudiantes("Alejandra", "Montaño", 21, {Inglés: 10,Literatura: 9, Historia: 7, Ecología: 8});
var robStu = new Estudiantes("Roberto", "Fuentes", 20, {Inglés: 7, Ecología: 7, Comercio: 10});
var tamStu = new Estudiantes("Tamara", "Herrera", 22, {Inglés: 9, Literatura: 8});
var julStu = new Estudiantes("Julio", "Rodriguez", 21, {Inglés: 9, Comercio: 9, Administración: 8});

listaEstudiante.agregar(aleStu); 
listaEstudiante.agregar(robStu);
listaEstudiante.agregar(tamStu); 
listaEstudiante.agregar(julStu);

actualizarTabla();

//ASIGNAR MATERIAS Y CALIFICACIONES
//?????

//BUSCAR ALUMNO Y MOSTRAR EN HTML
//Método en constructor
function buscarAlumno() {
    let input = document.getElementById("buscarAlumno");
    let mostrarAlumno = document.getElementById("mostrarAlumno");

    let nombreEstudiante = input.value;
    let alumnoEncontrado = listaEstudiante.buscar(nombreEstudiante);

    if (alumnoEncontrado) {
        mostrarAlumno.textContent = "Nombre: " + alumnoEncontrado.nombre + ", Apellido: " + alumnoEncontrado.apellido + ", Edad: " + alumnoEncontrado.edad + ", Materias: " + alumnoEncontrado.materia;
    }else{
        mostrarAlumno.textContent = "No se encontró al alumno."
    }
}

let btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", buscarAlumno);

//Hidden Buscar Alumnos
const botonBuscar = document.getElementById("botonBuscar");
const showAlumno = document.querySelector(".diseñoNuevo")

function mostrarBuscar() {
    showAlumno.classList.remove("hidden");
    alta.classList.add("hidden");
}

botonBuscar.addEventListener("click", mostrarBuscar);
