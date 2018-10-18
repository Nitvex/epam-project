import {APPLY_RECORD} from "../constants/action-types";

export const applyRecord = (time, place, master) => ({type: APPLY_RECORD, payload: {time, place, master}});