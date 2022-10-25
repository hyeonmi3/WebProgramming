const express = require('express');
const router = express.Router();
const tododb = require('../../models/mariadb/todo');

// 할 일 리스트 조회
router.get('/', async(req, res) => {
    const rows = await tododb.selectTodos();
    res.json(rows);
});

// 할 일 추가
router.get('/', async(req, res) => {
    const {job} = req.body;
    const result = await tododb.insertTodo(job);
    console.log(result);
    if(result && result.affectedRows == 1) res.json({result:'ok'});
    else res.json({result:'ng'});
});

// 할 일 삭제
router.get('/:todoId', async(req, res) => {
    const todoId = req.params.todoId;
    const result = await todoId.deleteTodo(todoId);
    console.log(result);
    if(result && result.affectedRows == 1) res.json({result:'ok'});
    else res.json({result:'ng'});
});

module.exports = router;