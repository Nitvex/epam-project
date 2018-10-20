import {combineReducers} from 'redux';
import authenticationReducer from "./authentication";
import correctInputReducer from "./correctInput";
import informationReducer from "./information";
import locationsReducer from './locations';
import recordsReducer from './records';

export default combineReducers({
    authenticationReducer,
    correctInputReducer,
    informationReducer,
    locationsReducer,
    recordsReducer
});
