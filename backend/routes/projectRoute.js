const express = require('express');
const {getProjects} = require('../controller/projectController');

const router = express.Router();

router.get('/', getProjects);


module.exports = router;
