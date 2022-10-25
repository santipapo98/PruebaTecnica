import {
    AUTH_TOKEN,
} from "../types/types";

export const setAuthToken = (data) => {
    return dispatch => {
        try {
            dispatch({
                type: AUTH_TOKEN,
                payload: data.uid
            });

        } catch (error) {
            dispatch({
                type: 'ERROR',
            }); 
        }
    };
};