const express = require('express');
const router = express.Router();


router.post('/login', async (req, res) => {
	const user = await UserController.login(req.body);
	
	if(user){
		req.session.user = user;
		res.send({data: user});
	}
});

router.use((req, res, next) => {
	if(req.session.user){
		next();
	}
});

router.get('/strain-data', (req, res) => {
	res.send({data: {
		strains: DataController.getStrains(),
		dispensaries: DataController.getDispensaries(),
		brands: DataController.getBrands()
	}});
});



module.exports = router;