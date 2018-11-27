console.log('included');

global.seedUsers = async () => {
	await User.dropTable();
	User.create({
		username: 'nquinn721',
		password: 'nate123',
		isAdmin: true
	})
	User.create({
		username: 'simon',
		password: 'simon123',
		isAdmin: true
	})
	User.create({
		username: 'mert',
		password: 'mert123',
		isAdmin: true
	})
}