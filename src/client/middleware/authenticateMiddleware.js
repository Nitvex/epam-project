import {
    TRY_AUTHENTICATE,
    TRY_MAKE_APPOINTMENT,
    GET_APPOINTMENTS,
    TRY_CANCEL_APPOINTMENT
} from "../constants/action-types";
import {authenticate} from "../actions/authentication/authenticate";
import {wrongInput} from "../actions/input/wrongInput";
import {correctInput} from "../actions/input/correctInput";
import {makeAppointment} from "../actions/appointments/makeAppointment";
import {addAppointments} from "../actions/appointments/addAppointments";
import {deleteAppointments} from "../actions/appointments/deleteAppointments";
import {cancelAppointment} from "../actions/appointments/cancelAppointment";

export const authenticateMiddleware = ({dispatch}) => next => action => {

    let requestOptions = {
        method: 'POST',
        headers: new Headers(),
        mode: 'cors',
        cache: 'default',
        body: action.payload,
    };

    if (action.type === TRY_AUTHENTICATE) {
        fetch(`http://127.0.0.1:3000/authenticate?username=${action.payload.username}&password=${action.payload.password}`, requestOptions).then((response) => {
            return response.json();
        }).then((res) => {
            if (res.status.toString() === "ok") {
                localStorage.setItem('authenticated', 'yes');
                localStorage.setItem('user', action.payload.username.toString());
                dispatch(authenticate());
                dispatch(correctInput());
            } else {
                dispatch(wrongInput());
            }
        });
    }

    if (action.type === TRY_MAKE_APPOINTMENT) {
        let user = localStorage.getItem('user');
        let {id, date, time, place, master} = action.payload;
        fetch(`http://127.0.0.1:3000/makeappointment?username=${user}&id=${id}&date=${date}&time=${time}&place=${place}&master=${master}`, requestOptions).then((response) => {
            return response.json();
        }).then((res) => {
            if (res.status.toString() === "ok") {
                dispatch(makeAppointment(id, date, time, place, master));
            }
        });
    }

    if (action.type === GET_APPOINTMENTS) {
        let user = localStorage.getItem('user');
        fetch(`http://127.0.0.1:3000/getappointments?username=${user}`, requestOptions).then((response) => {
            return response.json();
        }).then((appointments) => {
            dispatch(deleteAppointments());
            dispatch(addAppointments(appointments));
        });
    }


    if (action.type === TRY_CANCEL_APPOINTMENT) {
        let user = localStorage.getItem('user');
        let {id, date, time, place, master} = action.payload;
        fetch(`http://127.0.0.1:3000/cancelappointment?username=${user}&id=${id}`, requestOptions).then((response) => {
            return response.json();
        }).then((res) => {
            if (res.status.toString() === "ok") {
                dispatch(cancelAppointment(id, date, time, place, master));
            }
        });
    }

    next(action);
};
