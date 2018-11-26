const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminUserSchema = new Schema({
	username: String,
	password: String,
	hash: String,
});
const AUM = mongoose.model('AdminUser', AdminUserSchema);

class AdminUser{
	static login(username, password){
		AUM.findOne({username})
	}
}

global.AdminUser = AdminUser;
