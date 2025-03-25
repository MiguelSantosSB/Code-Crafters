const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.post('/create', userController.create);

module.exports = router;
