const router = require('express').Router()
const path = require('path')

router.get('/editPost', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/editPost.html'))
})

module.exports = router
