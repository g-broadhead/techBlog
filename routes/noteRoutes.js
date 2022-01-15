const router = require('express').Router()
const { Post, User, Note } = require('../model')
const passport = require('passport')

// Post a post
router.post('/notes', passport.authenticate('jwt'), async function (req, res) {
  const note = await Note.create({
    body: req.body.body,
    pid: req.body.pid,
    uid: req.user.id
  })
  res.json(note)
})

// Get posts
router.get('/notes', passport.authenticate('jwt'), async function (req, res) {
  const notes = await Note.findAll({ include: [User, Post] })
  res.json(notes)
})

// DELETE post
router.delete('/posts/:id', passport.authenticate('jwt'), async function (req, res) {
  await Post.destroy({ where: { id: req.params.id } })
  res.sendStatus(200)
})

module.exports = router