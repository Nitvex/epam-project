import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div>
                login
                <br/>
                <Link to="/">Main page</Link>
                <br/>
                <Link to="/about">About</Link>
                <br/>
                <Link to="/account">Account</Link>
                <br/>
                <Link to="/login">login</Link>
                <br/>
            </div>
        );
    }
}

export default Login;
