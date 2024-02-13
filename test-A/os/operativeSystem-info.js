const os = require('node:os');

// console.log(os);
// console.log('Nombre del sistema perativo: ',os.platform());
// console.log('Version del sistema perativo: ',os.release());
// console.log('Memoria total (bytes): ',os.totalmem());
// console.log('Arquitectura del sistema perativo: ',os.arch()); //32bits o 64bits
// console.log('Cuantas CPUs tiene el SO: ', os.cpus().length);
// console.log('Cuantas CPUs tiene el SO: ', os.cpus()); //Nos va a permitir escalar procesos en node

// console.log('Memoria libre: ', os.freemem());
// console.log('Memoria libre: ', os.freemem() / 1024 / 1024);
// console.log('Memoria total: ', os.totalmem());
// console.log('Memoria total: ', os.totalmem() / 1024 / 1024);

console.log('Uptime SO: ', os.uptime());
console.log('Uptime SO: ', os.uptime() / 60 / 60); // 60min / 60seg