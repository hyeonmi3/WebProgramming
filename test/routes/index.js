var express = require('express');
const tododb = require('../models/mariadb/todo');

const router = express.Router();

/* GET home page. */
router.get('/', async(req, res) => {
  const rows = await tododb.selectTodos();
  res.render('index', { todos:rows });
});

module.exports = router;
