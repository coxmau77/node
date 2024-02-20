// App para encontrar un puerto disponible en tu equipo
// console.log("Hola free port");

const net = require('node:net');

function findAvalilablePort(desiredPort) {

    return new Promise((resolve, rejects) => {

        const server = net.createServer();

        server.listen(desiredPort, () => {

            const { port } = server.address();

            server.close(() => {

                resolve(port);
            });
        });

        server.on('error', (error) => {

            if(error === 'EADDRINUSE') {

                findAvalilablePort(0).then(port => resolve(port));
            } else {
                rejects(error);
            }

        });
    });
}

module.exports = {
    findAvalilablePort
}