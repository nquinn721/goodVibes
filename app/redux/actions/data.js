import Service from './service';

export const getData = () => {
    return (dispatch) => {
        Service.dispatchGet(dispatch, `strain-data`, {
            init: 'GET_DATA',
			success: 'GET_DATA_SUCCESS',
			error: 'GET_DATA_FAILED'
        });
    }
}