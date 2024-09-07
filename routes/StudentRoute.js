const express = require('express');
const router = express.Router();
const studentController = require('../controllers/StudentController');

router.get('/students/:id', studentController.getStudentById);

module.exports = router;
