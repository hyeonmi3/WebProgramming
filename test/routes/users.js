var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [
    { id: 1, name: 'user1'},
    { id: 2, name: 'usre2'}
  ];
  res.json(users);
});

module.exports = router;
