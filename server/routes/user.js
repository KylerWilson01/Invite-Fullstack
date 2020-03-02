const express = require("express")
const router = express.Router()

const users = []
let userId = 0

router.post('/user', (req, res, next) => {
  userId++
  next()
})

router.post('/user', (req, res, next) => {
  users.push({ ...req.body, userId: userId })
  res.json({
    message: 'User Added'
  })
  console.log(users)
})

router.get('/user/:userId', (req, res, next) => {
  const user = users.find(user => user.userId === req.params.userId)
  res.json(user)
})

module.exports = router