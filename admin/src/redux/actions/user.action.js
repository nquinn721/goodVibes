import Service from './service';


export const login = (user) => {
	return (dispatch) => {
		Service.dispatchPost(dispatch, 'admin/login', user, {
			init: 'LOGGING_IN',
			success: 'LOGGED_IN',
			error: 'LOGIN_FAILED'
		});
	}
}