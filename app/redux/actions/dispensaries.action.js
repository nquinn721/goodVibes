import Service from './service';

export const getDispensaries = ({latitude, longitude}) => {
    return (dispatch) => {
        Service.dispatchGet(dispatch, `get/${longitude}/${latitude}`, {
            init: 'GET_DISPENSARIES',
			success: 'GET_DISPENSARIES_SUCCESS',
			error: 'GET_DISPENSARIES_FAILED'
        });
    }
}