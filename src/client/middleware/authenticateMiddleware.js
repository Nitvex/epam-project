import {TRY_AUTHENTICATE} from "../constants/action-types";
import {authenticate} from "../actions/authenticate";
import {wrongInput} from "../actions/wrongInput";
import {correctInput} from "../actions/correctInput";

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
                dispatch(authenticate());
                dispatch(correctInput());
            } else {
                dispatch(wrongInput());
            }
        });
    }
    next(action);
};
