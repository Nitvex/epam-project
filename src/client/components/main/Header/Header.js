import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './style.css';
import {connect} from "react-redux";
import {logout} from "../../../actions/authentication/logout";
import {authenticate} from "../../../actions/authentication/authenticate";
import {resetInput} from "../../../actions/input/resetInput";

const mapStateToProps = (authenticationReducer) => {
    return {isAuthenticated: authenticationReducer.isAuthenticated};
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        authenticate: () => dispatch(authenticate()),
        resetInput: () => dispatch(resetInput()),
    };
};

class connectedHeader extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (localStorage.getItem('authenticated') === 'yes') {
            this.props.authenticate();
        }
    }

    logout = () => {
        this.props.logout();
        this.props.resetInput();
        localStorage.setItem('authenticated', 'no');
        localStorage.setItem('user', '');
        this.forceUpdate();
    };

    render() {
        return (
            <header className="header sticky-top">
                <nav className="nav nav-pills justify-content-around flex ">
                    <Link to="/" className="nav-item nav-link mustache" href="#">
                        <img src="https://png.icons8.com/metro/100/000000/english-mustache.png"
                             alt="mustache"/>
                    </Link>
                    <Link to="/" className="nav-item nav-link" href="#">Main page</Link>
                    <Link to="/about" className="nav-item nav-link" href="#">About</Link>
                    <Link to="/account" className="nav-item nav-link" href="#">Account</Link>
                    {
                        ((localStorage.getItem('authenticated') === 'yes') || (this.props.isAuthenticated)) ?
                            <Link to="/" onClick={this.logout} href="#" className="nav-item nav-link logout">Log
                                out</Link> :
                            <Link to="/login" className="nav-item nav-link logout" href="#">Login</Link>
                    }
                </nav>
            </header>
        );
    }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(connectedHeader);
export default Header;
