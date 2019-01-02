const opts = {base: {
    demand: true,
    alias: 'b'
},
limite: {
    alias: 'l',
    default: 10
}}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea el archivo con el contenido de la tabla', opts)
    .help()
    .argv;//esto es un pquete

module.exports = {
    argv
}