import {TRY_APPLY_RECORD} from "../../constants/action-types";

export const tryApplyRecord = (id, time, place, master) => ({
    type: TRY_APPLY_RECORD,
    payload: {id, time, place, master}
});