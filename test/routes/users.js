var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  // 단순 배열
  const message = ['Hello', 'Everyone', '!'];

  // 객체의 배열
  const users = [
    {userId: 'userA', name: 'AAA'},
    {userId: 'userB', name: 'BBB'},
    {userId: 'userC', name: 'CCC'},
  ]
});

router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`Hello ${userId}`);
})

module.exports = router;