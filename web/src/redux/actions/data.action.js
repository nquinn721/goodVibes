import Service from './service';

export const getData = () => {
	return (dispatch) => {
		Service.dispatchGet(dispatch, 'admin/strain-data', {
			init: 'GETTING_DATA',
			success: 'GOT_DATA',
			error: 'GETTING_DATA_FAILED'
		});
	}
}