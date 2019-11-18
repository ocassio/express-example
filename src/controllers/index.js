const { Router } = require('express');
const homeController = require('./home.controller');
const usersController = require('./users.controller');

const router = new Router();

router.use('/', homeController);
router.use('/users', usersController);

module.exports = router;