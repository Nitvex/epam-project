import {APPLY_RECORD, DECLINE_RECORD, AUTHENTICATE, LOGOUT, ADD_INFO} from "../constants/action-types";

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
        case ADD_INFO:
            return {
                ...state,
                masters: [...state.masters, ...action.payload.masters],
                times: [...state.times, ...action.payload.times],
                places: [...state.places, ...action.payload.places],
            };
        default:
            return state;
    }
};
export default rootReducer;