const express = require('express');
const AuthController = require('../controller/AuthController');
const router = express.Router();

router
    .post('/register', AuthController.Register)
    .post('/login', AuthController.Login)
    .delete('/delete/:id', AuthController.Delete)

module.exports = router;