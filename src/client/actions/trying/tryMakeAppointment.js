import {TRY_MAKE_APPOINTMENT} from "../../constants/action-types";

export const tryMakeAppointment = (id, time, place, master) => ({
    type: TRY_MAKE_APPOINTMENT,
    payload: {id, time, place, master}
});