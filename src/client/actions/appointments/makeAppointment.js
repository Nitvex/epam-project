import {APPLY_APPOINTMENT} from "../../constants/action-types";

export const makeAppointment = (id, time, place, master) => ({type: APPLY_APPOINTMENT, payload: {id, time, place, master}});