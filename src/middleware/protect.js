const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const { profile } = require('../services/members/auth.service');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const response = await profile(decoded.id)
            const user = response.object

            if (!user) {
                res.status(401)
                throw new Error('You are not authorized')
            }
            req.user = user;
            next()

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('You are not authorized')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not authorized, not token')
    }
})


module.exports = { protect }