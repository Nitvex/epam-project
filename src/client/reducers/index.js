import {combineReducers} from 'redux';
import authenticationReducer from "./authentication";
import correctInputReducer from "./correctInput";
import informationReducer from "./information";
import locationsReducer from './locations';
import recordsReducer from './records';
import {routerReducer} from 'react-router-redux'

export default combineReducers({
    routing: routerReducer,
    authenticationReducer,
    correctInputReducer,
    informationReducer,
    locationsReducer,
    recordsReducer
});
