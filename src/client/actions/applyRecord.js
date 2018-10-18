import {APPLY_RECORD} from "../constants/action-types";

export const applyRecord = (place, time, master) => ({type: APPLY_RECORD, payload: {place, time, master}});