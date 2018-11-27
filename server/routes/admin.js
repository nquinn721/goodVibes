const express = require('express');
const router = express.Router();


router.post('/login', async (req, res) => {
	const user = await UserController.login(req.body);
	
	if(user){
		res.send({data: user});
	}
});

router.use((req, res, next) => {
	if(req.session.user){
		next();
	}
});



module.exports = router;