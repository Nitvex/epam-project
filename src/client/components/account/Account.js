import React, {Component} from 'react';
import {connect} from 'react-redux';
import {tryMakeAppointment} from '../../actions/trying/tryMakeAppointment';
import {tryCancelAppointment} from '../../actions/trying/tryCancelAppointment';
import {fetchInfo} from "../../actions/info/fetchInfo";
import {getAppointments} from "../../actions/appointments/getAppointments";
import Header from '../main/Header/Header';
import './style.css';

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
        tryMakeAppointment: (id, date, time, place, master) => dispatch(tryMakeAppointment(id, date, time, place, master)),
        tryCancelAppointment: (id, date, time, place, master) => dispatch(tryCancelAppointment(id, date, time, place, master)),
        fetchInfo: () => dispatch(fetchInfo()),
        getAppointments: () => dispatch(getAppointments()),
    };
};


class connectedAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSamePlace: false,
            isPastDate: false,
        }
    }

    componentDidMount() {
        if (this.props.masters.length === 0) {
            this.props.fetchInfo();
        }
        this.props.getAppointments();
    }

    isTheSameDateTimePlaceMaster = (appointment, date, time, place, master) => {
        return ((appointment.date === date) &&
            (appointment.time === time) &&
            (appointment.place === place) &&
            (appointment.master === master))
    };

    makeAppointment = () => {
        let date = this.date.value.split("-").reverse().join("-");
        let time = this.time.value;
        let place = this.place.value;
        let master = this.master.value;
        let splittedDate = date.split("-");
        let appointmentDate = new Date(Number(splittedDate[2]), Number(splittedDate[1] - 1), Number(splittedDate[0]));
        let isFutureDate = appointmentDate > new Date();
        if (isFutureDate) {
            let appointments = this.props.appointments;
            let found = false;
            for (let appointment of this.props.appointments) {
                if (this.isTheSameDateTimePlaceMaster(appointment, date, time, place, master)) {
                    found = true;
                    this.setState({isSamePlace: true});
                    this.setState({isPastDate: false});
                    setTimeout(() => {
                        this.setState({isSamePlace: false})
                    }, 6000);
                    break;
                }
            }
            if (appointments.length === 0) {
                this.props.tryMakeAppointment(1, date, time, place, master);
            } else if (!found) {
                appointments.sort((a, b) => {
                    return b.id - a.id;
                });
                this.props.tryMakeAppointment(Number(appointments[0].id) + 1, date, time, place, master);
            }
        } else {
            this.setState({isPastDate: true});
            this.setState({isSamePlace: false});
            setTimeout(() => {
                this.setState({isPastDate: false})
            }, 6000);
        }
    };


    cancel = (appointment) => {
        let {id, date, time, place, master} = appointment;
        this.props.tryCancelAppointment(id, date, time, place, master);
    };

    splitDate = (date) => {
        let splittedDate = date.split("-");
        return new Date(Number(splittedDate[2]), Number(splittedDate[1] - 1), Number(splittedDate[0]));
    };

    sort = (appointments) => {
        return appointments.sort((a, b) => {
            return this.splitDate(a.date) < this.splitDate(b.date);
        })
    };

    render() {
        return (
            <div className="account">
                <Header/>
                <div className="ml-5 mt-3 hey">Hey, <span className="username">{localStorage.getItem('user')}</span>!
                    You can make an appointment below
                </div>

                <div className="w-100 mt-3 px-5">
                    <label className="date label">Choose date</label>
                    <label className="time label">Choose time</label>
                    <label className="place label">Choose place</label>
                    <label className="master label">Choose master</label>
                </div>
                <div className="input-group mt-0 px-5">
                    <input type="date" name="appointmentday" max="3000-12-31"
                           min="2018-01-01" className="form-control" ref={(date) => this.date = date}/>
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

                    <button className="input-group-append btn w-25 justify-content-center"
                            onClick={this.makeAppointment}>Make an
                        appointment
                    </button>
                    {
                        (this.state.isSamePlace) ?
                            <div className="alert w-100" role="alert">
                                <h4 className="alert-heading">Same place, same time!</h4>
                                <p>It seems you've tried to make an appointment at the same date, same time, same place
                                    and same master!
                                </p>
                                <hr/>
                                <p className="mb-0">Please change date, time, place or master
                                </p>
                            </div> : ''
                    }
                    {
                        (this.state.isPastDate) ?
                            <div className="alert w-100" role="alert">
                                <h4 className="alert-heading">Incorrect date!</h4>
                                <p>It seems you've tried to make an appointment at the past date or haven't entered
                                    date! Only future dates are allowed
                                </p>
                                <hr/>
                                <p className="mb-0">Please change date, time, place or master.
                                </p>
                            </div> : ''
                    }
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
                                    <th className="text-center bg-light">Date</th>
                                    <th className="text-center bg-light">Time</th>
                                    <th className="text-center bg-light">Place</th>
                                    <th className="text-center bg-light">Master</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.sort(this.props.appointments).map((r) => {
                                    return (
                                        <tr key={r.id}>
                                            <td className="text-center info">{r.date}</td>
                                            <td className="text-center info">{r.time}</td>
                                            <td className="text-center info">{r.place}</td>
                                            <td className="text-center info">{r.master}</td>
                                            <td>
                                                {new Date(this.splitDate(r.date)) > new Date() ?
                                                    <button className="btn-primary button"
                                                            onClick={this.cancel.bind(this, r)}>
                                                        Cancel
                                                    </button> :
                                                    <button className="btn-secondary button">
                                                        Cancel
                                                    </button>
                                                }

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
