const persona = require('./Modulo.js');

let parametroDeConsola = process.argv[2];

let parametroDeDefinicion = process.argv[3];

switch (parametroDeConsola){
    case "Nombre":
        console.log ("LISTADO DE PERSONAS\n---------------------");
        let listaDePersonas = persona.nombre(parametroDeDefinicion);
        listaDePersonas.forEach(function(elemento,index){
            console.log (`${index+1}. ${elemento.nombre} de ${elemento.edad}, sexo ${elemento.sexo} y nacionalidad ${elemento.nacionalidad}. Actualmente recide en ${elemento.direccion}.`)
        })
    break;
    case "Direccion":
        let elemento = persona.direccion(parametroDeDefinicion);
        console.log (`${elemento.nombre} de ${elemento.edad}, sexo ${elemento.sexo} y nacionalidad ${elemento.nacionalidad}.`)
    break;
    case "Edad":
        console.log ("LISTADO DE PERSONAS\n---------------------");
        let listaDePersonasPorEdad = persona.edad(parametroDeDefinicion);
        listaDePersonasPorEdad.forEach(function(elemento,index){
            console.log (`${index+1}. ${elemento.nombre} de ${elemento.edad}, sexo ${elemento.sexo} y nacionalidad ${elemento.nacionalidad}. Actualmente recide en ${elemento.direccion}.`)
        })
    break;
    default:
        console.log("Defina su busqueda")
}