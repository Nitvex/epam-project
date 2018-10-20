import {createStore, applyMiddleware} from "redux";
import reducer from "../reducers/index";
import {fetchMiddleware} from "../middleware/fetchMiddleware";
import {authenticateMiddleware} from "../middleware/authenticateMiddleware";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, fetchMiddleware, authenticateMiddleware)));
export default store;