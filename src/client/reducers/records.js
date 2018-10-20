import {APPLY_RECORD, DECLINE_RECORD, ADD_RECORDS, DELETE_RECORDS} from "../constants/action-types";

const initialState = {
    records: [],
};

export default function recordsReducer(state = initialState, action) {
    switch (action.type) {
        case APPLY_RECORD:
            return {...state, records: [...state.records, action.payload]};
        case DECLINE_RECORD:
            let records = [...state.records].filter((r) => {
                return r.id !== action.payload.id
            });
            return {...state, records: [...records]};
        case ADD_RECORDS:
            return {...state, records: [...action.payload]};
        case DELETE_RECORDS:
            return {...state, records: []};
        default:
            return state;
    }
};
