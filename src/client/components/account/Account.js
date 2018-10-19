import React, {Component} from 'react';
import {connect} from 'react-redux';
import {applyRecord} from '../../actions/applyRecord';
import {declineRecord} from '../../actions/declineRecord';
import {fetchMasters} from "../../actions/fetchMasters";
import Header from '../main/Header/Header';
import './style.css'

const mapStateToProps = state => {
    return {
        records: state.records,
        masters: state.masters,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        applyRecord: (time, place, master) => dispatch(applyRecord(time, place, master)),
        declineRecord: (time, place, master) => dispatch(declineRecord(time, place, master)),
        fetchMasters: () => dispatch(fetchMasters()),
    };
};


class connectedAccount extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.masters.length === 0) {
            this.props.fetchMasters();
        }
    }


    apply = () => {
        let time = this.time.value;
        let place = this.place.value;
        let master = this.masters.value;
        this.props.applyRecord(time, place, master);
    };

    delete = (time, place, master) => {
        this.props.declineRecord(time, place, master);
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
                    <input className="form-control" type="text" ref={(time) => {
                        this.time = time;
                    }}/>
                    <input className="form-control" type="text" ref={(place) => {
                        this.place = place;
                    }}/>

                    <select className="custom-select" ref={(masters) => {
                        this.masters = masters;
                    }}>
                        {
                            this.props.masters.map(m => {
                                return <option key={m}>{m}</option>
                            })
                        }
                    </select>

                    <button className="input-group-append btn w-25 justify-content-center" onClick={this.apply}>Apply
                    </button>
                </div>

                <p className="text-center mt-3 text-uppercase text-black">You're signed for the following</p>
                <p className="ml-5 text-black-50">Note: if you can't come, please notify us by phone or decline record. Thank you for choosing us!</p>
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
                            <tr key={r.time + r.place + r.master}>
                                <td className="text-center">{r.time}</td>
                                <td className="text-center">{r.place}</td>
                                <td className="text-center">{r.master}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>

            </div>
        );
    }
}

const Account = connect(mapStateToProps, mapDispatchToProps)(connectedAccount);
export default Account;
