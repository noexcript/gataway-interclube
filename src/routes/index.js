const { Router } = require('express')
const { protect } = require('../middleware/protect')
const router = Router()

router.use('/socios', protect, require('./socio'))
router.use('/auth', require('./auth'))


router.get('/', (req, res)=>{
    res.status(200).json({
        message: 'gataway version 1.0'
    })
})

module.exports = router