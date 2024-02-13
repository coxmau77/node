const { error } = require('node:console');
const fs = require('node:fs'); //A partir de node v16, se recomienda utilizar el prefijo node: antes del modulo

const info = fs.statSync('./text.txt');

console.log(
    info.isFile(), // Boolean, Si es un archivo
    info.isDirectory(), // Booblean, si es un directorio
    info.isSymbolicLink(), // Si es un enlace simbolico, isSymbolicLink(): boolean
    info.size, // StatsBase<number>.size: number >>> bytes
);

// De manera predeterminada readfile es asincrono por lo que deberemos utilizar un callback para manejar la informacion que nos brinda la lectura o algun posible error en la lectura.
fs.readFile('./text.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log('Error al leer el archivo:', error);
        return;
    }
    console.log('Contenido del archivo de texto: ', data);
});