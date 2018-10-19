import {APPLY_RECORD, DECLINE_RECORD, AUTHENTICATE, LOGOUT, ADD_MASTERS} from "../constants/action-types";

const initialState = {
    records: [],
    isAuthenticated: false,
    masters: [],
    times: [],
    places: [],
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case APPLY_RECORD:
            return {...state, records: [...state.records, action.payload]};
        case DECLINE_RECORD:
            let records = [...state.records].filter((r) => {
                return r.id !== action.payload.id
            });
            return {...state, records: [...records]};
        case AUTHENTICATE:
            return {...state, isAuthenticated: true};
        case LOGOUT:
            return {...state, isAuthenticated: false};
        case ADD_MASTERS:
            return {...state, masters: [...state.masters, ...action.payload]};
        default:
            return state;
    }
};
export default rootReducer;