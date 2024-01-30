const express = require('express');
const { register, login, auth } = require('../controllers/user.controller');
const { registerRules, Validatorr } = require('../middlewares/validator');
const { verifyAuth } = require('../middlewares/verifAuth');

const router = express.Router();

router.post('/register', registerRules(), Validatorr, register);

router.post('/login', login);

router.get('/auth', verifyAuth, auth);

module.exports = router;
