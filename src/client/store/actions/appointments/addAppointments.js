import {ADD_APPOINTMENTS} from "../../constants/action-types";

export const addAppointments = (appointments) => ({type: ADD_APPOINTMENTS, payload: appointments});