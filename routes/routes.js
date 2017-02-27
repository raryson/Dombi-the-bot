const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('home/index')
})

router.get('/people', function (req, res) {
  res.render('people/index')
})

router.get('/dombi', function (req, res) {
  res.render('dombi/index')
})

module.exports = router
