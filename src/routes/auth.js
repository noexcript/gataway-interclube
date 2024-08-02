const { Router } = require('express')
const { signin, signup, currentUser } = require('../controllers/auth')
const { protect } = require('../middleware/protect')

const router = Router()


router.post('/signin', signin)
router.post('/signup', signup)
router.get('/current/', protect, currentUser)


module.exports = router