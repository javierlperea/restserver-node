const { response, request } = require('express')



const usuarioGet = (req = request, res = response) => {
    const { q, nombre = 'No name', apikey, page = '1', limit } = req.query

    res.json({
        msg: 'GET API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuarioPut = (req = request, res = response) => {

    const { id } = req.params

    res.json({
        msg: 'PUT API - Controlador',
        id
    })
}

const usuarioPost = (req = request, res = response) => {
    const { nombre, apellido, edad } = req.body;
    const { id } = req.params


    res.json({
        msg: 'POST API - Controlador',
        nombre,
        apellido,
    })
}

const usuarioDelete = (req = request, res = response) => {

    res.json({
        msg: 'DELETE API - Controlador',
    })
}

const usuarioPatch = (req = request, res = response) => {

    res.json({
        msg: 'PATCH API - Controlador',
    })
}



module.exports = {
    usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete,
    usuarioPatch
}