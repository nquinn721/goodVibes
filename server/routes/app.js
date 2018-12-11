const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('hi'))
router.get('/get/:longitude/:latitude', async (req, res) => {
	res.send({data: await DispensaryController.getDispensaries(req.params)});
})


router.get('/strain-data', (req, res) => { 
	res.send({data: {
		strains: DataController.getBrands()[0].categories[0].products,
		products: DataController.getBrands()[4].categories[0].products
	}});
});


module.exports = router;
