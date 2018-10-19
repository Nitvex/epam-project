import {FETCH_MASTERS} from "../constants/action-types";
import {addMasters} from "../actions/addMasters";

export const fetchMiddleware = ({dispatch}) => next => action => {
    let requestOptions = {
        method: 'GET',
        headers: new Headers(),
        mode: 'cors',
        cache: 'default'
    };


    if (action.type === FETCH_MASTERS) {
        fetch('http://127.0.0.1:3000/account', requestOptions).then((response) => {
            return response.json();
        }).then((masters) => {
            dispatch(addMasters(...[masters]));

        });
    }

    next(action);
};
