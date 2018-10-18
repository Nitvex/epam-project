import {DECLINE_RECORD} from "../constants/action-types";

export const declineRecord = (place, time, master) => ({type: DECLINE_RECORD, payload: {place, time, master}});