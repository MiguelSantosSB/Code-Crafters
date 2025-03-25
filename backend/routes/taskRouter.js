const express = require('express');
const taskController = require('../controller/taskController')
const router = express.Router();

router.post('/create', taskController.create);




module.exports = router