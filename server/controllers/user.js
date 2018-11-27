class UserController{
	async login({username, password}){
		return await User.login(username, password);
	}

}

module.exports = new UserController();