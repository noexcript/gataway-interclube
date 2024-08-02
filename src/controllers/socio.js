const asyncHandler = require('express-async-handler')
const { register } = require('../services/members/socio.service')




const createSocio = asyncHandler(async (req, res) => {
    const { id } = req.user
    const { nome_completo, morada, naturalidade, contacto } = req.body
    const { foto, bi } = req.files

    if (!nome_completo || !morada || !naturalidade || !contacto) {
        res.status(400)
        throw new Error('Todos os campos são obrigatório')
    }

    const result = await register(id, nome_completo, morada, naturalidade, contacto, foto, bi)

    if (!result.object) {
        res.status(400)
        throw new Error(result.message)
    }

    res.status(200).json(result)

})

const show = asyncHandler(async (req, res) => {
    const { id } = req.user


})

module.exports = {
    createSocio
}