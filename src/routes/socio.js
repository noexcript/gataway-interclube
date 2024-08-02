const { Router } = require('express')
const { protect } = require('../middleware/protect')
const { currentUser } = require('../controllers/auth')
const { createSocio } = require('../controllers/socio')
const multer = require('multer')
const upload = multer()

const router = Router()

const files = upload.fields([
    {
        name: 'foto',
        maxCount: 1
    },
    {
        name: 'bi',
        maxCount: 1
    },
])

router.get('/:id', currentUser)
router.post('/', files, createSocio)
// router.put('/:id')
// router.patch('/:id')
// router.delete('/:id')

module.exports = router