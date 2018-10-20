import {TRY_AUTHENTICATE} from "../../constants/action-types";

export const tryAuthenticate = (username, password) => ({type: TRY_AUTHENTICATE, payload: {username, password}});