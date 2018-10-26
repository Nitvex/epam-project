import {TRY_MAKE_APPOINTMENT} from "../../constants/action-types";

export const tryMakeAppointment = (id, date, time, place, master) => ({
    type: TRY_MAKE_APPOINTMENT,
    payload: {id, date, time, place, master}
});