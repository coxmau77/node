// 1.0.0 Semantic versioning
// x.y.z

// x -> Mayor | la version que rompe o no la compatibilidad por ejemplo
// 1.9.9 a 2.0.1

// y -> Minor | Este valor se incrementa cuando se agregan nuevas funcionalidades al desarrollo
// 2.0.9 a > 2.1.0

// z -> Patch | Este valor se incrementa a medida que se hacen test y reparan bugs en la app

const fs = require('node:fs/promises');
const path = require('node:path');
const picocolors = require('picocolors');

const folder = process.argv[2] ?? '.';

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
            console.error(picocolors.red(`No se pudo leer el contenido del directorio ${filePath}`));
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