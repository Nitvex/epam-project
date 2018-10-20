import {DECLINE_RECORD} from "../../constants/action-types";

export const declineRecord = (id, time, place, master) => ({type: DECLINE_RECORD, payload: {id, time, place, master}});