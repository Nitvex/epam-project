import {MAKE_APPOINTMENT} from "../../constants/action-types";

export const makeAppointment = (id, date, time, place, master) => ({
    type: MAKE_APPOINTMENT,
    payload: {id, date, time, place, master}
});