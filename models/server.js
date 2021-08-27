/* ACA MANEJO TODA LA CONEXION MEDIANTE EXPRESS UTILIZANDO CLASES!  */
const express = require('express');
const cors = require('cors');

// Clase que maneja la conexion
class Server {

    constructor() {

        this.app = express();
        // defino el puerto en el constructor
        this.port = process.env.PORT
        // path para las rutas (ayuda a entender mejor el flujo del codigo)
        this.usuariosPath = '/api/usuarios'

        // Llamado a middlewares
        this.middlewares();

        // Llamado a las rutas de mi aplicacion desde el constructor
        this.routes();
    }


    middlewares() {
        // CORS (intercambio de recursos de origen cruzado)
        this.app.use(cors());

        // Lectura y parse del body
        this.app.use(express.json());

        // manejo de rutas estaticas! (llama al index.html de la carpeta public)
        this.app.use(express.static('public'));
    }


    // Metodo para las demas rutas
    routes() {

        // voy a manejar las rutas usando un middleware en la que especifico la nueva ruta definida en el constructor --> this.usuariosPath = '/api/usuarios'
        this.app.use(this.usuariosPath, require('../routes/usuarios.route'))
    }

    // Metodo de listen para el puerto
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
}

module.exports = Server;