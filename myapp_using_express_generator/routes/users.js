// test
var express = require('express');
var faker = require('faker');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    userName: faker.internet.userName(),
    email: faker.internet.email()
  });
  res.send(data);
});

module.exports = router;
