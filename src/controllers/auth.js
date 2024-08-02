const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const { login, register, profile } = require('../services/members/auth.service')


const generetedJWTtoken = id => jwt.sign({ id },
    process.env.JWT_SECRET, { expiresIn: '2h' }
)

const signin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const result = await login(email, password)

    if (!result.object) {
        res.status(400)
        throw new Error(result.message)
    }
    const { user } = result.object
    if (user) {
        res.status(201).json({
            message: result.message,
            object: {
                _id: user.id,
                username: user.username,
                email: user.email,
                token: generetedJWTtoken(user.id)
            }
        })
    } else {
        res.status(400)
        throw new Error('Credencias inválidas')
    }

})

const signup = asyncHandler(async (req, res) => {

    const { password, email, username } = req.body

    if (!username || !email || !password) {
        res.status(400)
        throw new Error('Todos os campos são obrigatório')
    }

    const result = await register(username, email, password)


    if (result.type == 'error') {
        res.status(400)
        throw new Error(result.message)
    }
    res.status(201).json(result)
})

const currentUser = asyncHandler(async (req, res) => {
    const { id } = req.user

    const result = await profile(id)

    if (!result.object) {
        res.status(400)
        throw new Error(result.message)
    }

    res.status(200).json(result)
})
const signout = asyncHandler(async (req, res) => {

    const { id } = req.user


    jwt.sign({ id },
        process.env.JWT_SECRET, { expiresIn: '0h' }
    )
    req.user = null
    res.status(200).json({ object: null, message: 'Logout feito com sucesso' })
})





module.exports = { signin, signup, currentUser, signout }

