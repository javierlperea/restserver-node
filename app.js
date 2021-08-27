require('dotenv').config();


const Server = require('./models/server');

// creo una instancia de la clase Server
const server = new Server();

// llamo al metodo listen de la clase server
server.listen();
