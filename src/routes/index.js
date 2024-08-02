const { Router } = require('express')
const router = Router()


router.use('/auth', require('./auth'))


router.get('/', (req, res)=>{
    res.status(200).json({
        message: 'gataway version 1.0'
    })
})

module.exports = router