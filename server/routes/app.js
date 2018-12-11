const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('hi'))
router.get('/get/:longitude/:latitude', async (req, res) => {
	res.send({data: await DispensaryController.getDispensaries(req.params)});
})


module.exports = router;
