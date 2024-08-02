const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user')


const generetedJWTtoken = id => jwt.sign({ id },
    process.env.JWT_SECRET, { expiresIn: '2h' }
)

const signin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
            message: 'Success to signin',
            object: {
                _id: user.id,
                username: user.username,
                email: user.email,
                token: generetedJWTtoken(user.id)
            }
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }

})

const signup = asyncHandler(async (req, res) => {

    const { password, email, username } = req.body

    if (!username || !email || !password) {
        res.status(400)
        throw new Error('All fields are mandatory')
    }

    const user = await User.findOne({ email })
    if (user) {
        res.status(400)
        throw new Error('This e-mail already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const userCreate = await User.create({ username, password: hash, email })

    if (!userCreate) {
        res.status(400)
        throw new Error('Invalid user data')
    } else {

        res.status(201).json({
            message: 'Success to signup',
            object: {
                _id: userCreate.id,
                username: userCreate.username,
                email: userCreate.email,
                token: generetedJWTtoken(user.id)
            }
        })
    }
})

const currentUser = asyncHandler(async (req, res) => {
    const { id } = req.user

    const user = await User.findById(id).select('-password')
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }

    res.status(200).json({ object: user, message: 'Get User' })
})


module.exports = { signin, signup, currentUser }

