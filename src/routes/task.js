const { Router } = require('express')
const { findAll, show, store, update, remove } = require('../controllers/task')


const router = Router()


router.get('/', findAll)
router.get('/:id', show)

router.post('/', store)
router.put('/:id', update)

router.patch('/:id', update)

router.delete('/:id', remove)

module.exports = router