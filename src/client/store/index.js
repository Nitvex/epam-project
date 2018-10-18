import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers/index";
import {fetchMiddleware} from "../middleware/fetchMiddleware";

const store = createStore(rootReducer, applyMiddleware(fetchMiddleware));
export default store;