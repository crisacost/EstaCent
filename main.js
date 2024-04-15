let usuario = prompt (" Ingresa nombre de usuario ");
while( usuario == " " ){                               /* ver de poner tambien un "o aceptar" o nada... */
    alert( usuario + "No es nombre de usuario");      /*mas a delante ver p/ poner un inicio de sesion */
    usuario = prompt(" Ingresa nuevo nombre de usuario");
   
}

/* ver si cambiar el script de lugar abajo de todo, en el body para que aparezca 
el html antes de terminar toda la ejecucion de js */

let techo = prompt("Bienvenido " + usuario + " elija una opcion: bajotecho - sintecho ")

if(techo == "bajotecho"){
    alert (" Elejiste bajotecho");
    bajotecho();

}else{
    alert( "Elejiste sintecho, tenes lugar en planta baja A. Gracias" );
}

/* Funciones*/

function bajotecho() {
    let vehiculo = prompt(" Dinos tu vehiculo: Auto-Motocicleta-Chata")

    switch (vehiculo) {
        case "auto":
            alert("Elejiste auto, tenes lugar en el primer piso. Gracias");
            break;

        case "motocicleta":
            alert("Elejiste motocicleta, tenes lugar en planta baja B. Gracias");
            break;

        case "chata":
            alert("Elejiste Chata, tenes lugar en el segundo piso. Gracias");
            break;
        default:
            alert("No es una opcion valida");
            break;

    }

}
 

















