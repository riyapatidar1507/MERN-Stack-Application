const express = require('express');
const router = express.Router();
const { upload } = require('../middleware/upload');
const { getAllClients, createClient } = require('../controllers/clientController');

router.get('/', getAllClients);
router.post('/', upload.single('image'), createClient);

module.exports = router;