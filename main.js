let usuario = prompt (" Ingresa nombre de usuario ");
while( usuario == " " ){                               /* ver de poner tambien un "o aceptar" o nada... */
    alert( usuario + "No es nombre de usuario");      /*mas a delante ver p/ poner un inicio de sesion */
    usuario = prompt(" Ingresa nuevo nombre de usuario");
   
}

/* ver si cambiar el script de lugar abajo de todo, en el body para que aparezca 
el html antes de terminar toda la ejecucion de js */


/*objetos contructores/ funciones contructoras*/

const lugaresDisponibles = {
    auto: 100,
    moto: 100,
    chata: 100,
};

class Vehiculo {                      /*no era mi intencion poner una clase pero pide esa correcion (no se porque)*/
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
const vehiculosEstacionados = [];

function agregarvehiculo (vehiculo) {
    vehiculosEstacionados.push(vehiculo);
}

function removerVehiculo (patente) {
    const indice = vehiculosEstacionados.findIndex(vehiculo => vehiculo.patente === patente);
    if (indice !== -1) {
        const vehiculoRemovido = vehiculosEstacionados.splice(indice, 1)[0];
        lugaresDisponibles[vehiculoRemovido.tipo]++;
        return vehiculoRemovido;
    } else {
        return null;
    }

}


let techo = prompt("Bienvenido " + usuario + " elija una opcion: bajotecho - sintecho ")

if(techo === "bajotecho"){
    alert (" Elejiste bajotecho");
    bajotecho();

}else{
    alert( "Elejiste sintecho, tenes lugar en planta baja A. Gracias" );
}

/* Funciones*/

function bajotecho() {
    let vehiculo = prompt(" Dinos tu vehiculo: auto-moto-chata")

    switch (vehiculo) {
        case "auto":
            if (lugaresDisponibles.auto > 0) {
                agregarvehiculo(new Vehiculo("Desc", "Desc", "auto"));
                lugaresDisponibles.auto--;
                alert("Elejiste auto, tenes lugar en el primer piso. Gracias");
            } else {
                alert("Lo sentimos, no hay lugares disponibles");
            }
            break;

        case "moto":
            if (lugaresDisponibles.moto > 0) {
                agregarvehiculo(new Vehiculo("Desc", "Desc", "moto"));
                lugaresDisponibles.moto--;
                alert("Elejiste moto, tenes lugar en planta baja B. Gracias");
            } else {
                alert("Lo sentimos, no hay lugares disponibles");
            }
            break;

        case "chata":
            if (lugaresDisponibles.chata > 0) {
                agregarvehiculo(new Vehiculo("Desc", "Desc", "chata"));
                lugaresDisponibles.chata--;
                alert("Elejiste Chata, tenes lugar en el segundo piso. Gracias");
            } else {
                alert("Lo sentimos, no hay lugares disponibles");
            }
            break;
        default:
            alert("No es una opcion valida");
            break;

    }

}

contarVehiculos();

console.log("Lugares disponible para autos:", lugaresDisponibles.auto);
console.log("Lugares disponible para moto:", lugaresDisponibles.moto);
console.log("Lugares disponible para chata:", lugaresDisponibles.chata);

/*...........................................................................................................*/



















