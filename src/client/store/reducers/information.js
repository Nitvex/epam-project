import {ADD_INFO} from "../constants/action-types";

const initialState = {
    times: [],
    places: [],
    masters: [],
};
export default function informationReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_INFO:
            return {
                ...state,
                times: [...state.times, ...action.payload.times],
                places: [...state.places, ...action.payload.places],
                masters: [...state.masters, ...action.payload.masters],
            };
        default:
            return state;
    }
}
;
