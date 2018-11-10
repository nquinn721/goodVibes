import Service from './service';

export const getLocalDispensaries = (lat, lon) => {
    return (dispatch) => {
        Service.dispatchGet(dispatch, `/${lat}/${lon}`, {
            init: 'GET_LOCAL_DISPENSARIES',
			success: 'GET_LOCAL_DISPENSARIES_SUCCESS',
			error: 'GET_LOCAL_DISPENSARIES_FAILED'
        });
    }
}

export const getYelpDispensaries = () => {
        return (dispatch) => {
        Service.dispatchGet(dispatch, '/yelp-dispensaries', {
            init: 'GET_DISPENSARIES',
            success: 'GET_DISPENSARIES_SUCCESS',
            error: 'GET_DISPENSARIES_FAILED'
        })
    }
}