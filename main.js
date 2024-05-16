//DOM//
const buttIniciarSecion= document.getElementById("buttIniciarSecion");
const nombreUsInput= document.getElementById("nombreUs");
const buttBajoTecho= document.getElementById("buttBajoTecho");
const buttSinTecho= document.getElementById("buttSinTecho");
const error= document.getElementById("error");
const nombreUsLeido= document.getElementById("nombreUsLeido");
const elegirOpcion= document.getElementById("elegirOpcion");
const mensajeFinal= document.getElementById("mensajeFinal");
//...................//


//let usuario = prompt (" Ingresa nombre de usuario ");
//while( usuario == " " ){                               /* ver de poner tambien un "o aceptar" o nada... */
 //   alert( usuario + "No es nombre de usuario");      /*mas a delante ver p/ poner un inicio de sesion */
   // usuario = prompt(" Ingresa nuevo nombre de usuario");
   
//}

buttIniciarSesion.addEventListener("click", function() {
    const nombreUs = nombreUsInput.value;
    if (nombreUs.trim() === "") {
        error.style.display = "block";
    } else {
        error.style.display = "none";
        nombreUsLeido.textContent = nombreUs;
        elegirOpcion.style.display = "block";
        localStorage.setItem("nombreUsuario", nombreUs);
    }
});





/*objetos contructores/ funciones contructoras*/

const lugaresDisponibles = {
    auto: 100,
    moto: 100,
    chata: 100,
};

class Vehiculo {                     
    constructor(marca, patente, tipo) {
        this.marca = marca;
        this.patente = patente;
        this.tipo = tipo;
    }
}

function filtrarPorTipo(vehiculos, tipo) {
    return vehiculos.filter(vehiculo => vehiculo.tipo === tipo);
}

function contarVehiculos() {
    for (const vehiculo of vehiculosEstacionados) {
        lugaresDisponibles [vehiculo.tipo] --;
    }
}

/*Arrays + funciones y metodos*/
const vehiculosEstacionados = JSON.parse(localStorage.getItem("vehiculosEstacionados")) || [];

function agregarvehiculo (vehiculo) {
    vehiculosEstacionados.push(vehiculo);
    localStorage.setItem("vehiculosEstacionados", JSON.stringify(vehiculosEstacionados));
}

function removerVehiculo (patente) {
    const indice = vehiculosEstacionados.findIndex(vehiculo => vehiculo.patente === patente);
    if (indice !== -1) {
        const vehiculoRemovido = vehiculosEstacionados.splice(indice, 1)[0];
        lugaresDisponibles[vehiculoRemovido.tipo]++;
        localStorage.setItem("vehiculosEstacionados", JSON.stringify(vehiculosEstacionados));
        return vehiculoRemovido;
    } else {
        return null;
    }

}


/*let techo = prompt("Bienvenido "  + " elija una opcion: bajotecho - sintecho ")

if(techo === "bajotecho"){
    mensajeFinal.textContent= " Elejiste bajotecho";
    bajotecho();

}else{
    mensajeFinal.textcontent= "Elejiste sintecho, tenes lugar en planta baja A. Gracias";
}*/

buttBajoTecho.addEventListener("click", function() {
    mensajeFinal.style.display="block";
    mensajeFinal.textContent = "Elejiste bajotecho";
    bajotecho();
});

buttSinTecho.addEventListener("click", function() {
    mensajeFinal.style.display="block";
    mensajeFinal.textContent = "Elejiste sintecho, tenes lugar en planta baja A. Gracias";
});

/* Funciones*/

function bajotecho() {
    let vehiculo = prompt(" Dinos tu vehiculo: auto-moto-chata")

    switch (vehiculo) {
        case "auto":
            if (lugaresDisponibles.auto > 0) {
                agregarvehiculo(new Vehiculo("Desc", "Desc", "auto"));
                lugaresDisponibles.auto--;
                mensajeFinal.textContent= "Elejiste auto, tenes lugar en el primer piso. Gracias";
            } else {
                mensajeFinal.textContent= "Lo sentimos, no hay lugares disponibles";
            }
            break;

        case "moto":
            if (lugaresDisponibles.moto > 0) {
                agregarvehiculo(new Vehiculo("Desc", "Desc", "moto"));
                lugaresDisponibles.moto--;
                mensajeFinal.textContent= "Elejiste moto, tenes lugar en planta baja B. Gracias";
            } else {
                mensajeFinal.textContent= "Lo sentimos, no hay lugares disponibles";
            }
            break;

        case "chata":
            if (lugaresDisponibles.chata > 0) {
                agregarvehiculo(new Vehiculo("Desc", "Desc", "chata"));
                lugaresDisponibles.chata--;
                mensajeFinal.textContent= "Elejiste Chata, tenes lugar en el segundo piso. Gracias";
            } else {
                mensajeFinal.textContent= "Lo sentimos, no hay lugares disponibles";
            }
            break;
        default:
            mensajeFinal.textContent= "No es una opcion valida";
            break;

    }

}

const nombreUsuarioGuardado = localStorage.getItem("nombreUsuario");
if(nombreUsuarioGuardado) {
    nombreUsLeido.textContent = nombreUsuarioGuardado;
    elegirOpcion.style.display = "block";
}

contarVehiculos();

console.log("Lugares disponible para autos:", lugaresDisponibles.auto);
console.log("Lugares disponible para moto:", lugaresDisponibles.moto);
console.log("Lugares disponible para chata:", lugaresDisponibles.chata);

/*...........................................................................................................*/

