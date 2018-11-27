const express = require('express');
const router = express.Router();

router.get('/user', async (req, res) => 
	res.send(req.session.user));


module.exports = router;
