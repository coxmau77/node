const fs = require('node:fs');

const directory = './my-directory';

fs.readdir(directory, (error, myDocuments) => {
    if (error) {
        console.log('No se pudo leer el contenido del directorio >> ',error);
        return;
    }
    console.log(myDocuments); // devuelve un array
    myDocuments.forEach(document => {
        console.log(document);
    });   
});

// Leer el directorio actual
fs.readdir('./', (error, myDocuments) => {
    if (error) {
        console.log('No se pudo leer el contenido del directorio >> ',error);
        return;
    }
    console.log(myDocuments); // devuelve un array
    myDocuments.forEach(document => {
        console.log(document);
    }); 
});