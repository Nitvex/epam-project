import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {applyRecord} from '../../actions/applyRecord'

const mapStateToProps = state => {
    return {records: state.records};
};

const mapDispatchToProps = dispatch => {
    return {
        applyRecord: (time, place, master) => dispatch(applyRecord(time, place, master))
    };
};


class connectedAccount extends Component {

    constructor(props) {
        super(props);
    }


    handleClick = () => {
        console.log(this.props);
        this.props.applyRecord("123", "St", "Mast");
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

                <button onClick={this.handleClick}>Apply</button>
                <ul>
                    {this.props.records.map((r) => {
                        return <li key={r.time}>{r.time} | {r.place} | {r.master}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const Account = connect(mapStateToProps, mapDispatchToProps)(connectedAccount);
export default Account;
