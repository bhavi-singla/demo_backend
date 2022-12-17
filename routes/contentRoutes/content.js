const express = require("express");
const router = express.Router();
const content = require("../../controller/contentRoute/content");

router.get('/content',content.getData);
router.post('/content',content.updateData);

module.exports = router;