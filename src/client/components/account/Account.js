import React, {Component} from 'react';
import {connect} from 'react-redux';
import {tryMakeAppointment} from '../../actions/trying/tryMakeAppointment';
import {tryCancelAppointment} from '../../actions/trying/tryCancelAppointment';
import {fetchInfo} from "../../actions/info/fetchInfo";
import {getAppointments} from "../../actions/appointments/getAppointments";
import Header from '../main/Header/Header';
import './style.css'

const mapStateToProps = ({informationReducer, appointmentsReducer}) => {
    return {
        appointments: appointmentsReducer.appointments,
        masters: informationReducer.masters,
        times: informationReducer.times,
        places: informationReducer.places,
        infoForAppointment: [
            informationReducer.times,
            informationReducer.places,
            informationReducer.masters,
        ]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        tryMakeAppointment: (id, time, place, master) => dispatch(tryMakeAppointment(id, time, place, master)),
        tryCancelAppointment: (id, time, place, master) => dispatch(tryCancelAppointment(id, time, place, master)),
        fetchInfo: () => dispatch(fetchInfo()),
        getAppointments: () => dispatch(getAppointments()),
    };
};


class connectedAccount extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.masters.length === 0) {
            this.props.fetchInfo();
        }
        this.props.getAppointments();
    }


    make = () => {
        let time = this.time.value;
        let place = this.place.value;
        let master = this.master.value;
        let appointments = this.props.appointments;
        if (appointments.length === 0) {
            this.props.tryMakeAppointment(1, time, place, master);
        } else {
            appointments.sort((a, b) => {
                return b.id - a.id;
            });
            this.props.tryMakeAppointment(Number(appointments[0].id) + 1, time, place, master);
        }
    };


    cancel = (appointment) => {
        let {id, time, place, master} = appointment;
        this.props.tryCancelAppointment(id, time, place, master);
    };

    render() {
        return (
            <div className="account">
                <Header/>
                <div className="w-100 mt-3 px-5">
                    <label className="w-25 label">Choose time</label>
                    <label className="w-25 label">Choose place</label>
                    <label className="w-25 label">Choose master</label>
                </div>
                <div className="input-group mt-0 px-5">
                    {
                        this.props.infoForAppointment.map((infoItem, index) => {
                            return (
                                <select key={index} className="custom-select" ref={(infoItem) => {
                                    switch (index) {
                                        case 0:
                                            this.time = infoItem;
                                            break;
                                        case 1:
                                            this.place = infoItem;
                                            break;
                                        case 2:
                                            this.master = infoItem;
                                            break;
                                        default:
                                            break;
                                    }
                                }}>
                                    {infoItem.map((option) => {
                                        return <option key={option}>{option}</option>
                                    })}
                                </select>)
                        })
                    }

                    <button className="input-group-append btn w-25 justify-content-center" onClick={this.make}>Make an
                        appointment
                    </button>
                </div>
                {
                    this.props.appointments.length === 0 ?
                        <p className="empty mt-5">Hmmm, it's empty here. Did you try to make an appointment?</p>
                        :
                        <div>

                            <p className="text-center mt-3 text-uppercase text-black">You've made appointments for the
                                following</p>
                            <p className="ml-5 text-black-50">Note: if you can't come, please notify us by phone or
                                cancel appointment.
                                Thank you for choosing us!</p>

                            <table className="table-striped table-bordered appointments bg-light">
                                <thead>
                                <tr>
                                    <th className="text-center bg-light">Time</th>
                                    <th className="text-center bg-light">Place</th>
                                    <th className="text-center bg-light">Master</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.appointments.map((r) => {
                                    return (
                                        <tr key={r.id}>
                                            <td className="text-center info">{r.time}</td>
                                            <td className="text-center info">{r.place}</td>
                                            <td className="text-center info">{r.master}</td>
                                            <td>
                                                <button className="btn-primary button"
                                                        onClick={this.cancel.bind(this, r)}>
                                                    Cancel
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                }

            </div>
        );
    }
}

const Account = connect(mapStateToProps, mapDispatchToProps)(connectedAccount);
export default Account;
