//DOM//
const buttIniciarSesion= document.getElementById("buttIniciarSesion");
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
const usuarList = document.getElementById("usuarList");
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
    Swal.fire({
        title: "¡Elegiste Sin Techo!",
        text: "Tenes lugar en planta baja A.",
        icon: "OK"
      });
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
                Swal.fire({
                    title: "¡Elegiste Auto!",
                    text: "Tenes lugar en el primer piso.",
                    icon: "OK"
                  });
            } else {
                mensajeFinal.textContent = "Lo sentimos, no hay lugares disponibles";
            }
            break;

        case "moto":
            if (lugaresDisponibles.moto > 0) {
                agregarvehiculo(new Vehiculo("Desc", "Desc", "moto"));
                Swal.fire({
                    title: "¡Elegiste Moto!",
                    text: "Tenes lugar en planta baja B.",
                    icon: "OK"
                  });
            } else {
                mensajeFinal.textContent = "Lo sentimos, no hay lugares disponibles";
            }
            break;

        case "chata":
            if (lugaresDisponibles.chata > 0) {
                agregarvehiculo(new Vehiculo("Desc", "Desc", "chata"));
                Swal.fire({
                    title: "¡Elegiste Chata!",
                    text: "Tenes lugar en el segundo piso.",
                    icon: "OK"
                  });
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

// Funciones para obtener y mostrar usuarios desde la API
function fetchUsuars() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsuars(data))
        .catch(error => console.error('Error al obtener usuarios:', error));
}

function displayUsuars(usuars) {
    usuars.forEach(usuar => {
        const listItem = document.createElement('li');
        listItem.textContent = usuar.name;
        usuarList.appendChild(listItem);
    });
}

fetchUsuars();

/*...........................................................................................................*/
/* "proyectoFinal AcostaCristina"*/
