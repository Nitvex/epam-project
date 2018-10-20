import {TRY_CANCEL_RECORD} from "../../constants/action-types";

export const tryCancelRecord = (id, time, place, master) => ({type: TRY_CANCEL_RECORD, payload: {id, time, place, master}});