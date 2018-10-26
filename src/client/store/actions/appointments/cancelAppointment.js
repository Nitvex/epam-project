import {CANCEL_APPOINTMENT} from "../../constants/action-types";

export const cancelAppointment = (id, date, time, place, master) => ({
    type: CANCEL_APPOINTMENT,
    payload: {id, date, time, place, master}
});