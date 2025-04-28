const express = require('express');
const router = express.Router();
const imagesController = require('../controllers/imagesController');

router.get('/images', imagesController.getImages);

module.exports = router;

