var listaTareas = new Array();

var tareaAnadida = new Object();

//primero vamos a añadir elementos al array
var pintar = document.querySelector('.tarea');//seleccionamos donde vamos a pintar
var tareaIntro = document.querySelector('#tareaAñadir');//esta es la tarea que vamos a añadir(el input) 
var enviar = document.querySelector('#guardar');
//boton que activa la funcion de pintar
let prior = document.querySelector('#prioridad').value;
let filPrior = document.querySelector('#filPrioridad');
var filPalab = document.querySelector('#buscadorGuapo');
var btnBorrado = document.querySelectorAll('.borrar');





var otraListaCompletadas = new Array();
var otraPantalla = new Array();



//esta mierda mete solo el titulo
function anadirTarea(tareaIntro) {
    let tituloNew = tareaIntro.value;
    prior = document.querySelector
        ('#prioridad').value;
    let id = listaTareas.length;
    tareaAnadida = new Object({
        idTarea: id,
        titulo: tituloNew,
        prioridad: prior.toLowerCase()

    });

    if (tituloNew.length > 0 && prior != "") {
        listaTareas.push(tareaAnadida);
        console.log(tareaAnadida.idTarea);
        pintar.innerHTML += '<li class="' + prior + '">' + tituloNew + '<button class="borrar" onclick="borrado(btnBorrado)">BORRAR</button></li>';
    }


}

function filtraTarea(filPrior) {
    let valfilPrior = filPrior.value;
    console.log(valfilPrior);
    otraListaCompletadas = listaTareas.filter(tarea => {
        return tarea.prioridad == valfilPrior;

    })
    //hasta aqui me filtra bien en consola
    console.log(otraListaCompletadas);
    if (valfilPrior == "urgente" || valfilPrior == "semanal" || valfilPrior == "diaria") {
        pintar.innerHTML = "";
        for (tarea of otraListaCompletadas) {
            let txtFil = tarea.titulo
            pintar.innerHTML += '<li class="' + valfilPrior + '">' + txtFil + '<button class="borrar" onclick="borrado(btnBorrado)">BORRAR</button></li>';
            continue;
        }

    }
    else {
        pintar.innerHTML = "";
        for (tareaAnt of listaTareas) {

            pintar.innerHTML += '<li class="' + tareaAnt.prioridad + '">' + tareaAnt.titulo + '<button class="borrar" onclick="borrado(btnBorrado)">BORRAR</button></li>';
        }


    }
}
//

function filtraPalab(filPalab) {
    //var filPalab = document.querySelector('#buscadorGuapo');
    let valfilPrior = filPrior.value;
    let xPalab = filPalab.value;
    if (valfilPrior == "urgente" || valfilPrior == "semanal" || valfilPrior == "diaria") {
        otraEnPantalla = otraListaCompletadas.filter(tF => {
            return tF.titulo.toLowerCase().includes(xPalab);
        })


    } else {
        otraEnPantalla = listaTareas.filter(tF => {
            return tF.titulo.toLowerCase().includes(xPalab);
        })

    }
    pintar.innerHTML = "";
    for (tarea of otraEnPantalla) {

        pintar.innerHTML += '<li class="' + tarea.prioridad + '">' + tarea.titulo + '<button class="borrar" onclick="borrado(btnBorrado)">BORRAR</button></li>';
    }
    console.log(otraEnPantalla);
}


/*function borrado(btnBorrado) {
    var btnBorrado = document.querySelector('.borrar');
    console.log(btnBorrado);
    btnBorrado.innerHTML = "";

    //no he podido seguir, y aqui me he bloqueado. Mi idea era aplicarle al btnBorrado un parentNode pero por clase solo actuaría el boton sobre el primero.
    //el elemento btnBorrado me aparece como undefined.


}

*/

