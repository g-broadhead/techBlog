const router = require('express').Router()
const { posts, notes, users } = require('../models')
const passport = require('passport')

// GET comments
router.get('/notes', passport.authenticate('jwt'), async function (req, res) {
  const notes = await notes.findAll({ include: [users, posts] })
  res.json(notes)
})



// POST 
router.post('/notes', passport.authenticate('jwt'), async function (req, res) {
  const notes = await notes.create({
    body: req.body.body,
    pid: req.body.pid,
    uid: req.user.id
  })
  res.json(notes)
})

router.get('/notes/:id', passport.authenticate('jwt'), async function (req, res) {
  const note = await note.findAll({ where: { pid: req.params.id }, include: [users] })
  res.json(note)
})


// DELETE
router.delete('/notes/:id', passport.authenticate('jwt'), async function (req, res) {
  await notes.destroy({ where: { id: req.params.id } })
  res.sendStatus(200)
})

module.exports = router