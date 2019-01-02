const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log("=========================".green);
    console.log(`=====Tabla del ${base} =======`.red);
    console.log("=========================".green);
   
        for(let i = 1 ; i <= limite ; i++ ){
            console.log(`${base} * ${i} = ${i*base}`);
        }
       
}


// Asi la funcion crearArchivo solo es visible aqui
let crearArchivo = (base, limite) => {
// Con module.exports.crearArchivo lo exporto para que lo puedan ver mas
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject('El valor introducido o base no es un numero');
            return;
        }
        let data ='';
        for(let i = 1; i <= limite ; i++){
            data += (`${base} * ${i} = ${i*base}\n`);
        }
        // fs.writeFile('nombreArchivo', 'contenido que deseo guardar', callback error)
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
             else
                resolve(colors.green(`tabla-${base}.txt`));
        });
    });
    
}

// Exportar funciones
// para exportar mas solo se separan por  " , "
module.exports = {
    crearArchivo,
    listarTabla
}
