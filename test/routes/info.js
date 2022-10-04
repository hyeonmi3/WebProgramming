var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('info');
});

router.post('/update', (req, res) => {
  const title = req.body.title;
  res.send(`Title is ${title}`);
})

module.exports = router;
