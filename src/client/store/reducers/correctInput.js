import {
    WRONG_INPUT,
    CORRECT_INPUT,
    RESET_INPUT
} from "../constants/action-types";

const initialState = {
    correctInput: false,
};
export default function correctInputReducer (state = initialState, action) {
    switch (action.type) {
        case WRONG_INPUT:
            return {
                ...state, correctInput: 'wrongInput'
            };
        case CORRECT_INPUT:
            return {
                ...state, correctInput: true
            };
        case RESET_INPUT:
            return {
                ...state, correctInput: false
            };
        default:
            return state;
    }
};
