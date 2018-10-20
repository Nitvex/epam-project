import {TRY_AUTHENTICATE, TRY_APPLY_RECORD} from "../constants/action-types";
import {authenticate} from "../actions/authenticate";
import {wrongInput} from "../actions/wrongInput";
import {correctInput} from "../actions/correctInput";
import {applyRecord} from "../actions/applyRecord";

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

    if (action.type === TRY_APPLY_RECORD) {
        let user = localStorage.getItem('user');
        let {id, time, place, master} = action.payload;
        fetch(`http://127.0.0.1:3000/records?username=${user}&id=${id}&time=${time}&place=${place}&master=${master}`, requestOptions).then((response) => {
            return response.json();
        }).then((res) => {
            if (res.status.toString() === "ok") {
                dispatch(applyRecord(id, time, place, master));
            }
        });
    }
    next(action);
};
