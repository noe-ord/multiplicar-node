// requires Es para utilizar librerias existentes(expanciones ó codigos de otras personas)
//  o 2) propias de node ó 3)los que nosotros creamos
// const fs = require('fs');
// importamos nuestro archivo no es necesario poner .js por que es redundante

const {argv} = require('./config/yargs'); 
// const {argv} = require('./config/yargs').argv;
    // al final se coloca .argv para solo traer ese metodo
const colors = require('colors');

const {crearArchivo} = require('./multiplicar/multiplicar');
// cuando utilizo llaves depues de const ó let es destructuracion
const {listarTabla} = require('./multiplicar/multiplicar');

// console.log(argv);

let comando = argv._[0];

switch(comando){
    case 'listar':
        
        listarTabla(argv.base, argv.limite);
            // .then(arch => console.log(`El archivo ${arch} con limite ${argv.limite} a sido creado`))
            // .catch( e => console.log(e));
        console.log('listar');
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        console.log('crear');
    break;
    default: 
        console.log('Comando no reconocido');
}
// module es un archivo global y se crea en forma automatica
// process esotra variable de entorno que se ejecuta cuando se ejecuta node

// console.log(process.argv);
 
// los .argv(argumentos ) son datos que se guardan al ocupar la terminal

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// let argv2 = process.argv;
// console.log('limite', argv.limite);

// console.log(argv2);
   
