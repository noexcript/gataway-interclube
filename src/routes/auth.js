const { Router } = require('express')
const { signin, signup, currentUser, signout } = require('../controllers/auth')
const { protect } = require('../middleware/protect')

const router = Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.get('/profile', protect, currentUser)
router.get('/signout', protect, signout)


module.exports = router