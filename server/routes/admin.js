const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile(ADMIN + '/build/index.html');
});



module.exports = router;