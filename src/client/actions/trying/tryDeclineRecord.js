import {TRY_DECLINE_RECORD} from "../../constants/action-types";

export const tryDeclineRecord = (id, time, place, master) => ({type: TRY_DECLINE_RECORD, payload: {id, time, place, master}});