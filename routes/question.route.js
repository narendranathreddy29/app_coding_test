const express = require("express");
const router = express.Router();
const {getQuestions} = require('../controllers/question.controller.js');


router.get('/questions', getQuestions);

module.exports = router;