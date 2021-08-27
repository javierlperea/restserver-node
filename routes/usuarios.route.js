/* ACA SE MANEJAN TODAS LAS RUTAS DE LA CLASE SERVER PARA TENER EL CODIGO MAS ORDENADO */

// desestructuro la funcion Router de express
const { Router } = require('express')

const { usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete,
    usuarioPatch } = require('../controllers/usuarios.controller')

// router llama a la funcion Router()
const router = Router();

/*  Ahora las rutas no usan this.app.(get, put, post), sino que las maneja el router 
*   como la nueva ruta esta definida en el metodo routes del archivo server, ya no es necesario indicar la ruta en estos archivos
*   por lo que solo dejo lo siguiente --> '/'
*/

router.get('/', usuarioGet)

router.put('/:id', usuarioPut)

router.post('/:id', usuarioPost)

router.delete('/', usuarioDelete)

router.patch('/', usuarioPatch)

module.exports = router;