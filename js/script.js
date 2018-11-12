function myFunction() {
    var x = document.getElementById("responsivemenu");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



document.addEventListener("DOMContentLoaded", function(){
    estudiantes = JSON.parse(estudiantes);

    var nombreEstudiante = document.getElementById("nombre-estudiante");
    nombreEstudiante.innerHTML = estudiantes[0].nombre;
});