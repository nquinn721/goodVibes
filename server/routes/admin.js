const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
	res.sendFile(ADMIN + '/build/index.html');
});


router.post('/login', (req, res) => {
	console.log(req.body);
});

router.get('/login', (req, res) => {
	res.send("admin login");
})


module.exports = router;