import Service from './service';


export const login = ({username, password}) => {
	console.log('logging in', username, password);
	
	return (dispatch) => {
		Service.dispatchPost(dispatch, 'admin/login', {username, password}, {
			init: 'LOGGING_IN',
			success: 'LOGGED_IN',
			error: 'LOGIN_FAILED'
		});
	}
}