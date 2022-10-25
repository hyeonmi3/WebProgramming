var express = require('express');
const Todo = require('../models/sequelize/todoModel');

const router = express.Router();

/* GET home page. */
router.get('/', async(req, res) => {
  // const rows = await tododb.selectTodos();
  try{
  const rows = await Todo.findAll();
  res.render('index', { todos:rows });
  }catch(err){
    console.log(err);
    res.render('index');
  }
});

module.exports = router;
