const express = require('express');
const taskController = require('../controller/taskController')
const router = express.Router();

router.post('/create', taskController.create);
router.get('/findAll', taskController.findAll);
router.get('/findById/:id', taskController.findById);
router.put('/:userId/update/:taskId', taskController.update);
router.delete('/:userId/delete/:taskId', taskController.delete);

module.exports = router