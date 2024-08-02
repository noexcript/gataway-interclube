const { Router } = require('express')
const { protect } = require('../middleware/protect')
const router = Router()

router.use('/tasks', protect, require('./task'))
router.use('/auth', require('./auth'))

module.exports = router