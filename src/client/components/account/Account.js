import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {applyRecord} from '../../actions/applyRecord'
import {declineRecord} from '../../actions/declineRecord'

const mapStateToProps = state => {
    return {records: state.records};
};

const mapDispatchToProps = dispatch => {
    return {
        applyRecord: (time, place, master) => dispatch(applyRecord(time, place, master)),
        declineRecord: (time, place, master) => dispatch(declineRecord(time, place, master)),
    };
};


class connectedAccount extends Component {

    constructor(props) {
        super(props);
    }


    apply = () => {
        let time = this.time.value;
        let place = this.place.value;
        let master = this.master.value;
        this.props.applyRecord(time, place, master);
    };

    delete = (time, place, master) => {
        this.props.declineRecord(time, place, master);
    };


    render() {
        return (
            <div>
                Account
                <br/>
                <Link to="/">Main page</Link>
                <br/>
                <Link to="/about">About</Link>
                <br/>
                <Link to="/account">Account</Link>
                <br/>
                <Link to="/login">login</Link>
                <br/>

                <button onClick={this.apply}>Apply</button>


                <input type="text" ref={(time) => {
                    this.time = time;
                }}/>
                <input type="text" ref={(place) => {
                    this.place = place;
                }}/>
                <input type="text" ref={(master) => {
                    this.master = master;
                }}/>
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
