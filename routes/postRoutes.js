const router = require('express').Router()
const { Post, User, Note } = require('../models')
const passport = require('passport')

// GET posts
router.get('/posts', passport.authenticate('jwt'), async function (req, res) {
  const posts = await Post.findAll({ include: [User, Note] })
  res.json(posts)
})

// GET by id
router.get('/posts/:id', passport.authenticate('jwt'), async function (req, res) {
  const posts = await Post.findOne({ where: { id: req.params.id }, include: [User, Note] })
  res.json(posts)
})

// POST
router.post('/posts', passport.authenticate('jwt'), async function (req, res) {
  const post = await Post.create({
    body: req.body.body,
    title: req.body.title,
    uid: req.user.id
  })
  res.json(post)
})

// Update post
router.put('/posts/:id', passport.authenticate('jwt'), async function (req, res) {
  const post = await Post.update(req.body, { where: { id: req.params.id } })
  res.json(post)
})

// DELETE one post
router.delete('/posts/:id', passport.authenticate('jwt'), async function (req, res) {
  await Post.destroy({ where: { id: req.params.id } })
  res.sendStatus(200)
})

module.exports = router
