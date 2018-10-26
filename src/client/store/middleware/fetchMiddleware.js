import {FETCH_INFO, FETCH_LOCATIONS, GET_APPOINTMENTS} from "../constants/action-types";
import {addInfo} from "../actions/info/addInfo";
import {addLocations} from "../actions/locations/addLocations";
import {addAppointments} from "../actions/appointments/addAppointments";
import {deleteAppointments} from "../actions/appointments/deleteAppointments";


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
        case GET_APPOINTMENTS:
            let user = localStorage.getItem('user');
            fetch(`http://127.0.0.1:3000/getappointments?username=${user}`, requestOptions).then((response) => {
                return response.json();
            }).then((appointments) => {
                dispatch(deleteAppointments());
                dispatch(addAppointments(appointments));
            });
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
