import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers/index";
import {fetchMiddleware} from "../middleware/fetchMiddleware";
import {authenticateMiddleware} from "../middleware/authenticateMiddleware";

const store = createStore(rootReducer, applyMiddleware(fetchMiddleware, authenticateMiddleware));
export default store;