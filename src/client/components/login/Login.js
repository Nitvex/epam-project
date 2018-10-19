import React, {Component} from 'react';
import {authenticate} from "../../actions/authenticate";
import {logout} from "../../actions/logout";
import {connect} from 'react-redux';
import Header from '../main/Header/Header';
import {Redirect} from "react-router-dom";
import './style.css';

const mapStateToProps = state => {
    return {isAuthenticated: state.isAuthenticated};
};
const mapDispatchToProps = dispatch => {
    return {
        authenticate: () => dispatch(authenticate()),
        logout: () => dispatch(logout())
    };
};

class connectedLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wrongInput: ''
        }
    }


    formSubmit = () => {
        let username = this.username.value;
        let password = this.password.value;
        if (username === "user" && password === "12345") {
            this.props.authenticate();
            localStorage.setItem('authenticated', 'yes');
            this.setState({wrongInput: false});
        } else {
            this.username.value = '';
            this.password.value = '';
            this.setState({wrongInput: true});
        }
    };

    render() {
        let message = '';
        switch (this.state.wrongInput) {
            case true:
                message = <p className="text-danger">
                    Entered password or(and) username was wrong. Check your input please and try
                    again
                </p>;
                break;
            case false:
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
                    <form className="form w-50" onSubmit={this.formSubmit}>
                        <p className="advertisement">
                            In the assortment of the brand there are both goods necessary for the work of a professional
                            barber, and
                            means for individual use in everyday hair and beard care. Barber Wild in its products uses
                            only natural ingredients, plant essential oils and vitamin supplements, which make Barber
                            Wild cosmetics not only high-quality, but also truly useful.
                            Want to try? Login and sign up faster!
                        </p>
                        <label className="label">Username</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Enter your username"
                               ref={((username) => this.username = username)}/>
                        <br/>
                        <label className="label">Password</label>
                        <input type="password"
                               className="form-control"
                               placeholder="Enter your password"
                               ref={((password) => this.password = password)}/>
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

