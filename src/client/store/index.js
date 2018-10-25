import {createStore, applyMiddleware} from "redux";
import reducer from "../reducers/index";
import {fetchMiddleware} from "../middleware/fetchMiddleware";
import {requestMiddleware} from "../middleware/requestMiddleware";
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(fetchMiddleware, requestMiddleware)));
export default store;