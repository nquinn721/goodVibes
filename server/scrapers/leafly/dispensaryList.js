
async function start() {
	
	const data = await request('https://web-finder.leafly.com/api/search?centerLat=28.5826702&centerLon=-94.4820543&userLat=38.7915&userLon=-82.9217&topLeftLat=69.58366064429393&topLeftLon=-142.5582262006128&bottomRightLat=-35.91745505343936&bottomRightLon=-46.40588245061281');
	fs.writeFileSync('data/dispensaries.json', JSON.stringify(data.body, null, 4));
}

