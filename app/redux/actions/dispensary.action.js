import Service from './service';

export const getLocalDispensaries = (lat, lon) => {
    return (dispatch) => {
        Service.dispatchGet(dispatch, `http://localhost:3000/${lat}/${lon}`, {
            init: 'GET_LOCAL_DISPENSARIES',
			success: 'GET_LOCAL_DISPENSARIES_SUCCESS',
			error: 'GET_LOCAL_DISPENSARIES_FAILED'
        });
    }
}