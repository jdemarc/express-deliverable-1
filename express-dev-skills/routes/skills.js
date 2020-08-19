var express = require('express');
var router = express.Router();

const Skill = require('../models/skill');

router.get('/', function(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
});

module.exports = router;
