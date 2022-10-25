import {
    AUTH_TOKEN,
} from "../types/types";

const initalState = {
    auth_token: '',
};

export const TechnicalTestReducer = (state = initalState, action) => {
    switch (action.type) {
    case AUTH_TOKEN:
        return {
            ...state,
            auth_token: action.payload
        };
    default:
        return state
    }
};