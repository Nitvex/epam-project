import {FETCH_INFO} from "../constants/action-types";
import {addInfo} from "../actions/addInfo";

export const fetchMiddleware = ({dispatch}) => next => action => {
    let requestOptions = {
        method: 'GET',
        headers: new Headers(),
        mode: 'cors',
        cache: 'default'
    };

    if (action.type === FETCH_INFO) {
        fetch('http://127.0.0.1:3000/account', requestOptions).then((response) => {
            return response.json();
        }).then((infoForRecord) => {
            dispatch(addInfo(infoForRecord));
        });
    }

    next(action);
};
