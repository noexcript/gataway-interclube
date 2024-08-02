const { Router } = require('express')

const router = Router()

router.get('/')
router.get('/:id')
router.put('/:id')
router.patch('/:id')
router.post('/')
router.delete('/:id')

module.exports = router