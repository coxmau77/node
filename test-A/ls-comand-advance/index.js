const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.';

// fs.readdir(folder)
//     .then(files => {
//         files.forEach(file => {
//             console.log(file);
//         });
//     })
//     .catch(error => {
//         if (error) {
//             console.log('error al leer el directorio >> ', error);
//             return;
//         }
//     });

// Recuperar info de cada uno de los documentos dentro del directorio

async function ls(folder){

    let files;

    try {
        files = await fs.readdir(folder);

    } catch (error) {
        console.error(`No se pudo leer el contenido del directorio ${folder}`);
        process.exit(1);
    }

    // Vamos a recuperar todas las promesas de todos los documentos y acceder a la informacion de cada uno.
    const filePromises = files.map(async file => {

        const filePath = path.join(folder, file); //obtenemos el path de cada documento

        // Vamos a intentar obtener el stats de cada uno
        let stats;
        try {
            stats = await fs.stat(filePath);
        } catch (error) {
            console.error(`No se pudo leer el contenido del directorio ${filePath}`);
            process.exit(1);
        }

        const isDirectory = stats.isDirectory();
        const symbol = isDirectory ? '/' : '';
        const fileType = isDirectory ? 'd' : 'f';
        const fileSize = stats.size;
        const fileModified = stats.mtime;
        const fileLocalModified = stats.mtime.toLocaleString();

        return `Symbool: ${symbol} file: ${file.padEnd(20)} fileType: ${fileType} fileZise: ${fileSize.toString().padStart(10)} fileModified: ${fileModified} fileLocalModified: ${fileLocalModified}`;
    });

    const fileInfo = await Promise.all(filePromises);

    fileInfo.forEach(fileInfo => console.log(fileInfo));
}

ls(folder);