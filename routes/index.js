const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./postRoutes.js'))
router.use('/api', require('./noteRoutes.js'))
router.use('/api', require('./editRoutes.js'))
router.use(require('./htmlRoutes.js'))

module.exports = router
