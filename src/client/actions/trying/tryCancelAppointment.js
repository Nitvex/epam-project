import {TRY_CANCEL_APPOINTMENT} from "../../constants/action-types";

export const tryCancelAppointment = (id, time, place, master) => ({
    type: TRY_CANCEL_APPOINTMENT,
    payload: {id, time, place, master}
});