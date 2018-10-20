import {ADD_INFO} from "../constants/action-types";

const initialState = {
    masters: [],
    times: [],
    places: [],
};
export default function informationReducer(state = initialState, action) {
    switch (action.type) {
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
}
;
