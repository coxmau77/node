const fs = require('node:fs');

// En este ejemplo la lectura de los archivos los hace de manera Sincrona o secuencial, es decir que va a ejecutar linea por linea ya que estamos diciendole explicitamente con la instruccion readFileSync.
// console.log('>>> Read text.txt ...')
// const readFile = fs.readFileSync('./text.txt', 'utf-8');
// console.log(readFile);

// console.log('Mostrar este mje mientras se lee el archivo');

// console.log('>>> Read text_document.txt ...')
// const readDocumentFile = fs.readFileSync('./text_document.txt', 'utf-8');
// console.log(readDocumentFile);
   
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Para hacer que la lectura sea asincrona debemos usar solo .readFile y agregar un callback function para manejar los errores y la informacion
var text = './text.txt';

console.log('>>> 1º Read text.txt ...')
fs.readFile(`${text}`, 'utf-8', (error, contentRead) => {
    if (error) {
        console.error('Error al leer el archivo:: ', error);
        return;
    }
    console.log('2º Contenido del archivo text.txt',contentRead);
});

console.log('>>> 3º Mostrar este mje mientras se lee el archivo');

console.log('>>> 4º Read text_document.txt ...')
fs.readFile('./text_document.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log('Se produjo un error al leer el archivo: ', error);
        return;
    }
    console.log('5º Contenido del archivo text_document:: ',data);
});