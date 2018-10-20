import {APPLY_APPOINTMENT, CANCEL_APPOINTMENT, ADD_APPOINTMENTS, DELETE_APPOINTMENTS} from "../constants/action-types";

const initialState = {
    appointments: [],
};

export default function appointmentsReducer(state = initialState, action) {
    switch (action.type) {
        case APPLY_APPOINTMENT:
            return {...state, appointments: [...state.appointments, action.payload]};
        case CANCEL_APPOINTMENT:
            let appointments = [...state.appointments].filter((r) => {
                return r.id !== action.payload.id
            });
            return {...state, appointments: [...appointments]};
        case ADD_APPOINTMENTS:
            return {...state, appointments: [...action.payload]};
        case DELETE_APPOINTMENTS:
            return {...state, appointments: []};
        default:
            return state;
    }
};
