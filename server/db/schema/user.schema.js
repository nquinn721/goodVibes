const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 13;

const UserSchema = new Schema({
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	isAdmin: Boolean
});

UserSchema.pre('save', function(next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
	const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;

    next();
});

UserSchema.methods.comparePassword = (pwFromLogin, userPw) => 
    bcrypt.compareSync(pwFromLogin, userPw)


const UserModel = mongoose.model('User', UserSchema);

class User{
	static async login(username, password){
		const user = await UserModel.findOne({username});
		
		if(user && user.comparePassword(password, user.password)){
			delete user.password;
			return user;
		}
	}

	static async create(obj){
		const user = new UserModel(obj);
		const u = await user.save();
		console.log(u);

	}

	static async dropTable(){
		await UserModel.remove({});
	}
}



global.User = User;
