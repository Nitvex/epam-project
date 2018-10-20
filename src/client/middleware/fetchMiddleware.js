import {FETCH_INFO, FETCH_LOCATIONS} from "../constants/action-types";
import {addInfo} from "../actions/info/addInfo";
import {addLocations} from "../actions/locations/addLocations";


export const fetchMiddleware = ({dispatch}) => next => action => {
    let requestOptions = {
        method: 'GET',
        headers: new Headers(),
        mode: 'cors',
        cache: 'default'
    };

    let actionObject = {
        url: '',
        method: null
    };

    switch (action.type) {
        case FETCH_INFO:
            actionObject.url = 'account';
            actionObject.method = addInfo;
            break;
        case FETCH_LOCATIONS:
            actionObject.url = 'locations';
            actionObject.method = addLocations;
            break;
        default:
            break;
    }

    if (actionObject.method) {
        fetch(`http://127.0.0.1:3000/${actionObject.url}`, requestOptions).then((response) => {
            return response.json();
        }).then((items) => {
            dispatch(actionObject.method(items));
        });
    }


    next(action);
};
