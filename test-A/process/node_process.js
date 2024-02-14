const process = require('node:process');

// Argumentos de entrada en consola
// console.log(process.argv);

// Controlar eventos del proceso
// process.on('exit', (code) => {
//     console.log('El proceso está a punto de terminar con código de salida:', code);
// });

// Controlar el proceso y su salida
// 0 todo esta correcto
// 1 hay algun error
// process.exit(0);

// Current working directory
console.log(process.cwd());

// Variables de entorno
console.log(process.env.MI_VARIABLE_DE_ENTORNO);