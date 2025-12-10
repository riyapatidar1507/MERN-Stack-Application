const express = require('express');
const router = express.Router();
const { upload } = require('../middleware/upload');
const { getAllProjects, createProject } = require('../controllers/projectController');

router.get('/', getAllProjects);
router.post('/', upload.single('image'), createProject);

module.exports = router;