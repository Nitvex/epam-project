import {APPLY_RECORD, DECLINE_RECORD, AUTHENTICATE, LOGOUT, ADD_MASTER} from "../constants/action-types";

const initialState = {
    records: [],
    isAuthenticated: false,
    masters: []
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
        case ADD_MASTER:
            return {...state, masters: [...state.masters, action.payload]};
        default:
            return state;
    }
};
export default rootReducer;