import {CANCEL_RECORD} from "../../constants/action-types";

export const cancelRecord = (id, time, place, master) => ({type: CANCEL_RECORD, payload: {id, time, place, master}});