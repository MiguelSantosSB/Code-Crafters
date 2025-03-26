const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.post('/create', userController.create);
router.get('/findAll', userController.findAll);
router.get('/findById/:id', userController.findById);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.delete);

module.exports = router;