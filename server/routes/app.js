const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('hi'))
router.get('/get/:longitude/:latitude', async (req, res) => {
	res.send({data: await DispensaryController.getDispensaries(req.params)});
})


router.get('/strain-data', (req, res) => {
	res.send({data: {
		// strains: DataController.getStrains(),
		products: DataController.getBrands().slice(0, 20)
	}});
});


module.exports = router;
