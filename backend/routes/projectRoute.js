const express = require('express');
const projectController = require('../controller/projectController');

const router = express.Router();

router.get('/projects', projectController.getProjects);


module.exports = router;
