import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {applyRecord} from '../../actions/applyRecord';
import {declineRecord} from '../../actions/declineRecord';
import {fetchMasters} from "../../actions/fetchMasters";
import Header from '../main/Header/header';

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
            <div>
                <Header/>
                Account
                <button onClick={this.apply}>Apply</button>


                <input type="text" ref={(time) => {
                    this.time = time;
                }}/>
                <input type="text" ref={(place) => {
                    this.place = place;
                }}/>
                <select ref={(masters) => {
                    this.masters = masters;
                }}>
                    {
                        this.props.masters.map(m => {
                            return <option key={m}>{m}</option>
                        })
                    }
                </select>

                <ul>
                    {this.props.records.map((r) => {
                        return <li key={r.time}>{r.time} | {r.place} | {r.master}</li>
                        /*<button onClick={this.delete(r.time, r.place, r.master)}>X</button>*/

                    })}
                </ul>
            </div>
        );
    }
}

const Account = connect(mapStateToProps, mapDispatchToProps)(connectedAccount);
export default Account;
