var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let user = req.query;
  let inform = {
    username: "用户名是：" + user.username,
    password: "密码是：" + user.password
  }
  res.send(inform);
});

router.post('/', function (req, res, next) {
  let user = req.body;
  console.log(user)
  let inform = {
    username: "用户名是：" + user.params.username,
    password: "密码是：" + user.params.password
  }
  res.send(inform)
});


module.exports = router;
