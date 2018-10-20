import React, {Component} from 'react';
import {connect} from 'react-redux';
import {applyRecord} from '../../actions/applyRecord';
import {declineRecord} from '../../actions/declineRecord';
import {fetchInfo} from "../../actions/fetchInfo";
import Header from '../main/Header/Header';
import './style.css'

const mapStateToProps = ({informationReducer, recordsReducer}) => {
    return {
        records: recordsReducer.records,
        masters: informationReducer.masters,
        times: informationReducer.times,
        places: informationReducer.places,
        infoForRecord: [
            informationReducer.times,
            informationReducer.places,
            informationReducer.masters,
        ]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        applyRecord: (id, time, place, master) => dispatch(applyRecord(id, time, place, master)),
        declineRecord: (id, time, place, master) => dispatch(declineRecord(id, time, place, master)),
        fetchInfo: () => dispatch(fetchInfo()),
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
    }


    apply = () => {
        let time = this.time.value;
        let place = this.place.value;
        let master = this.master.value;
        let records = this.props.records;
        if (records.length === 0) {
            this.props.applyRecord(1, time, place, master);
        } else {
            records.sort((a, b) => {
                return b.id - a.id;
            });
            this.props.applyRecord(records[0].id + 1, time, place, master);
        }
    };


    decline = (record) => {
        let {id, time, place, master} = record;
        this.props.declineRecord(id, time, place, master);
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
                        this.props.infoForRecord.map((infoItem, index) => {
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

                    <button className="input-group-append btn w-25 justify-content-center" onClick={this.apply}>Apply
                    </button>
                </div>
                {
                    this.props.records.length === 0 ?
                        <p className="empty mt-5">Hmmm, it's empty here. Did you try to sign up?</p>
                        :
                        <div>

                            <p className="text-center mt-3 text-uppercase text-black">You're signed for the
                                following</p>
                            <p className="ml-5 text-black-50">Note: if you can't come, please notify us by phone or
                                decline record.
                                Thank you for choosing us!</p>

                            <table className="table-striped table-bordered records bg-light">
                                <thead>
                                <tr>
                                    <th className="text-center bg-light">Time</th>
                                    <th className="text-center bg-light">Place</th>
                                    <th className="text-center bg-light">Master</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.records.map((r) => {
                                    return (
                                        <tr key={r.id}>
                                            <td className="text-center info">{r.time}</td>
                                            <td className="text-center info">{r.place}</td>
                                            <td className="text-center info">{r.master}</td>
                                            <td>
                                                <button className="btn-primary button"
                                                        onClick={this.decline.bind(this, r)}>
                                                    Decline
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
