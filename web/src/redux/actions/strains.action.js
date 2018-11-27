import Service from './service';

export const getStrainData = () => {
	return (dispatch) => {
		Service.dispatchGet(dispatch, 'admin/strain-data', {
			init: 'GETTING_STRAIN_DATA',
			success: 'GOT_STRAIN_DATA',
			error: 'GETTING_STRAIN_DATA_FAILED'
		});
	}
}