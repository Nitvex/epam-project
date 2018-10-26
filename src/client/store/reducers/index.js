import {combineReducers} from 'redux';
import authenticationReducer from "./authentication";
import correctInputReducer from "./correctInput";
import informationReducer from "./information";
import locationsReducer from './locations';
import appointmentsReducer from './appointments';

export default combineReducers({
    authenticationReducer,
    correctInputReducer,
    informationReducer,
    locationsReducer,
    appointmentsReducer
});
