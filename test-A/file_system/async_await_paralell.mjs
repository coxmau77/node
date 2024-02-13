import { readFile } from "node:fs/promises";

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./text.txt', 'utf-8')
]).then(([textA, textB]) => {
    console.log('Texto A: ', textA);
    console.log('Texto B: ', textB);
});
