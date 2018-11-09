import React, {Component} from 'react';
import {tryAuthenticate} from "../../store/actions/trying/tryAuthenticate";
import {logout} from "../../store/actions/authentication/logout";
import {connect} from 'react-redux';
import Header from '../globalComponents/Header/Header';
import {Redirect} from "react-router-dom";
import './style.css';
import {resetInput} from "../../store/actions/input/resetInput";

const mapStateToProps = ({authenticationReducer, correctInputReducer}) => {
    return {
        isAuthenticated: authenticationReducer.isAuthenticated,
        correctInput: correctInputReducer.correctInput,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        tryAuthenticate: (username, password) => {
            dispatch(tryAuthenticate(username, password));
        },
        logout: () => dispatch(logout()),
        resetInput: () => dispatch(resetInput()),
    };
};

class connectedLogin extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.resetInput();
    }

    formSubmit = () => {
        let username = this.username.value;
        let password = this.password.value;
        this.props.tryAuthenticate(username, password);
    };

    render() {
        let message = '';
        switch (this.props.correctInput) {
            case 'wrongInput':
                message = <p className="text-danger">
                    Entered password or(and) username was wrong. Check your input please and try
                    again
                </p>;
                break;
            case true:
                message = <Redirect
                    to={{
                        pathname: '/account',
                    }}
                />;
                break;
            default:
                message = '';
                break;
        }
        return (
            <div>
                <Header/>
                <div className="login">
                    <img className="w-50" src={require('../../assets/images/login.jpg')} alt="login_picture"/>
                    <form className="form w-50" onSubmit={(event) => this.formSubmit(event)}>
                        <p className="advertisement">
                            In the assortment of the brand there are both goods necessary for the work of a professional
                            barber, and
                            means for individual use in everyday hair and beard care. Barber Wild in its products uses
                            only natural ingredients, plant essential oils and vitamin supplements, which make Barber
                            Wild cosmetics not only high-quality, but also truly useful.
                            Want to try? Login and make an appointment faster!
                        </p>
                        <label className="label">Username</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Enter your username"
                               ref={((username) => this.username = username)}
                               onChange={this.props.resetInput}/>
                        <br/>
                        <label className="label">Password</label>
                        <input type="password"
                               className="form-control"
                               placeholder="Enter your password"
                               ref={((password) => this.password = password)}
                               onChange={this.props.resetInput}/>
                        <p className="password-security">For additional security, make sure it's more than 15
                            characters,
                            or at least 7 characters, including a number, and a
                            lowercase letter.
                        </p>
                        {message}
                        <button type="submit" className="btn">Login</button>
                    </form>
                </div>

            </div>
        );
    }
}


const Login = connect(mapStateToProps, mapDispatchToProps)(connectedLogin);

export default Login;

