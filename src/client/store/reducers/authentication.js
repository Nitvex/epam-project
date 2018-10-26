import {AUTHENTICATE, LOGOUT} from "../constants/action-types";

const initialState = {
    isAuthenticated: false,
};

export default function authenticationReducer (state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATE:
            return {...state, isAuthenticated: true};
        case LOGOUT:
            return {...state, isAuthenticated: false};
        default:
            return state;
    }
};
