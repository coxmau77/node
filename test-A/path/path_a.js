const path = require('node:path');

console.log(path.sep); // Muestra cual es la separacion de niveles en tu SO

// Método para unir segmentos de rutas
const filePath = path.join('content', 'sub-folder', 'test.txt');
console.log('Path Join: ',filePath); // devuleve la union de las rutas: \content\sub-folder\test.txt

const baseName = path.basename(filePath);
console.log('Base Name: ',baseName); // test.txt

const url = path.basename('/user/profile/user-data/passwod.txt');
console.log('Base Name: ',url); //passwod.txt

// Podemos quitar tambien la extension del documento agregando un parametro
const noExtension = path.basename('/mi-site/products/my-cart.html', '.html');
console.log('Base Name no extension: ',noExtension); // my-cart

const extension = path.extname('hero-bg.webp');
console.log('Extension name: ', extension); // .webp