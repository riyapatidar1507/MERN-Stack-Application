const express = require('express');
const router = express.Router();
const { getAllNewsletters, createNewsletter } = require('../controllers/newsletterController');

router.get('/', getAllNewsletters);
router.post('/', createNewsletter);

module.exports = router;