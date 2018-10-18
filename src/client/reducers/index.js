import {APPLY_RECORD, DECLINE_RECORD, AUTHENTICATE, LOGOUT} from "../constants/action-types";

const initialState = {
    records: [],
    isAuthenticated: false,
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case APPLY_RECORD:
            return {...state, records: [...state.records, action.payload]};
        case DECLINE_RECORD:
            return {...state, records: [...state.records, action.payload]};
        case AUTHENTICATE:
            return {...state, isAuthenticated: true};
        case LOGOUT:
            return {...state, isAuthenticated: false};
        default:
            return state;
    }
};
export default rootReducer;