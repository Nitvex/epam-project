import {MAKE_APPOINTMENT} from "../../constants/action-types";

export const makeAppointment = (id, time, place, master) => ({
    type: MAKE_APPOINTMENT,
    payload: {id, time, place, master}
});