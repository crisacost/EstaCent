//DOM//
const buttIniciarSecion= document.getElementById("buttIniciarSecion");
const nombreUsInput= document.getElementById("nombreUs");
const buttBajoTecho= document.getElementById("buttBajoTecho");
const buttSinTecho= document.getElementById("buttSinTecho");
const buttConfirmarVehiculo = document.getElementById("buttConfirmarVehiculo");
const vehiculoSelect = document.getElementById("vehiculo");
const error= document.getElementById("error");
const nombreUsLeido= document.getElementById("nombreUsLeido");
const elegirOpcion= document.getElementById("elegirOpcion");
const seleccionarVehiculo = document.getElementById("seleccionarVehiculo");
const mensajeFinal= document.getElementById("mensajeFinal");
const lugaresAuto = document.getElementById("lugaresAuto");
const lugaresMoto = document.getElementById("lugaresMoto");
const lugaresChata = document.getElementById("lugaresChata");
//...................//

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
function actualizarEstadoLugares() {
    lugaresAuto.textContent = `Lugares disponibles para autos: ${lugaresDisponibles.auto}`;
    lugaresMoto.textContent = `Lugares disponibles para motos: ${lugaresDisponibles.moto}`;
    lugaresChata.textContent = `Lugares disponibles para chatas: ${lugaresDisponibles.chata}`;
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
    lugaresDisponibles[vehiculo.tipo]--;
    actualizarEstadoLugares();
}

function removerVehiculo (patente) {
    const indice = vehiculosEstacionados.findIndex(vehiculo => vehiculo.patente === patente);
    if (indice !== -1) {
        const vehiculoRemovido = vehiculosEstacionados.splice(indice, 1)[0];
        lugaresDisponibles[vehiculoRemovido.tipo]++;
        localStorage.setItem("vehiculosEstacionados", JSON.stringify(vehiculosEstacionados));
        actualizarEstadoLugares();
        return vehiculoRemovido;
    } else {
        return null;
    }

}

buttBajoTecho.addEventListener("click", function() {
    seleccionarVehiculo.style.display="block";
    mensajeFinal.style.display = "none";
    
});

buttSinTecho.addEventListener("click", function() {
    mensajeFinal.style.display="block";
    mensajeFinal.textContent = "Elejiste sintecho, tenes lugar en planta baja A. Gracias";
});

/* Funciones*/

buttConfirmarVehiculo.addEventListener("click", function() {
    const vehiculo = vehiculoSelect.value;
    mensajeFinal.style.display="block";
    seleccionarVehiculo.style.display= "none";



    switch (vehiculo) {
        case "auto":
            if (lugaresDisponibles.auto > 0) {
                agregarvehiculo(new Vehiculo("Desc", "Desc", "auto"));
                mensajeFinal.textContent = "Elejiste auto, tenes lugar en el primer piso. Gracias";
            } else {
                mensajeFinal.textContent = "Lo sentimos, no hay lugares disponibles";
            }
            break;

        case "moto":
            if (lugaresDisponibles.moto > 0) {
                agregarvehiculo(new Vehiculo("Desc", "Desc", "moto"));
                mensajeFinal.textContent = "Elejiste moto, tenes lugar en planta baja B. Gracias";
            } else {
                mensajeFinal.textContent = "Lo sentimos, no hay lugares disponibles";
            }
            break;

        case "chata":
            if (lugaresDisponibles.chata > 0) {
                agregarvehiculo(new Vehiculo("Desc", "Desc", "chata"));
                mensajeFinal.textContent = "Elejiste Chata, tenes lugar en el segundo piso. Gracias";
            } else {
                mensajeFinal.textContent = "Lo sentimos, no hay lugares disponibles";
            }
            break;
        default:
            mensajeFinal.textContent = "No es una opcion valida";
            break;

    }

});

const nombreUsuarioGuardado = localStorage.getItem("nombreUsuario");
if(nombreUsuarioGuardado) {
    nombreUsLeido.textContent = nombreUsuarioGuardado;
    elegirOpcion.style.display = "block";
}

contarVehiculos();
actualizarEstadoLugares();

/*...........................................................................................................*/

