const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
	res.sendFile(ADMIN + '/build/index.html');
});


router.post('/login', async (req, res) => {
	console.log('login route', req.body);
	
	const user = await UserController.login(req.body);
	if(user){
		console.log('logged in');
		
		res.send({data: user});
	}
});


module.exports = router;