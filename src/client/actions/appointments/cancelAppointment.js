import {CANCEL_APPOINTMENT} from "../../constants/action-types";

export const cancelAppointment = (id, time, place, master) => ({type: CANCEL_APPOINTMENT, payload: {id, time, place, master}});