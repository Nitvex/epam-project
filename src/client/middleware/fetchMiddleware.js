import {FETCH_MASTERS} from "../constants/action-types";
import {addMaster} from "../actions/addMaster";

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
            masters.forEach((master) => {
                dispatch(addMaster(master))
            });
        });
    }

    next(action);
};
