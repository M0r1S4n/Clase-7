const fs = require ('fs');

let funciones = 
    {   
        leer: function (){
            let info = fs.readFileSync ('Info.json', 'utf-8');
            return JSON.parse (info)
        },
        nombre : function (nombre){
            let lista = this.leer ();
            let filtro = lista.filter (personas => personas.nombre == nombre);
            return filtro
        },
        direccion : function (direccion){
            let lista = this.leer ();
            let persona = lista.find (persona => persona.direccion === direccion );
            if (persona == undefined){
                return null
            } else {
                return persona
            }
        },
        edad : function(edad){
            let lista = this.leer ();
            let filtro = lista.filter (personas => personas.edad == edad);
            return filtro
        }
    };

module.exports = funciones    
