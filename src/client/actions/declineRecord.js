import {DECLINE_RECORD} from "../constants/action-types";

export const DECLINE_RECORD = (place, time, master) => ({type: DECLINE_RECORD, payload: {place, time, master}});