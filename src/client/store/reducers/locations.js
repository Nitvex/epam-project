import {ADD_LOCATIONS,} from "../constants/action-types";

const initialState = {
    locations: [],
};
export default function locationsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LOCATIONS:
            return {
                ...state, locations: [...state.locations, ...action.payload]
            };
        default:
            return state;
    }
};
