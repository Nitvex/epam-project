import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {authenticate} from "../../actions/authenticate";
import {logout} from "../../actions/logout";
import {connect} from 'react-redux';

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
    }

    handleClick = () => {
        console.log(this.props.isAuthenticated);
        this.props.isAuthenticated ?
            this.props.logout() :
            this.props.authenticate();
    };

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
                {this.props.isAuthenticated ?
                    <button onClick={this.handleClick}>Sign out</button> :
                    <button onClick={this.handleClick}>Sign in</button>
                }
            </div>
        );
    }
}


const Login = connect(mapStateToProps, mapDispatchToProps)(connectedLogin);

export default Login;