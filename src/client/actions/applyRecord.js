import {APPLY_RECORD} from "../constants/action-types";

export const applyRecord = (id, time, place, master) => ({type: APPLY_RECORD, payload: {id, time, place, master}});