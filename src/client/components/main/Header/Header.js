import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './style.css';
import {connect} from "react-redux";
import {logout} from "../../../actions/logout";
import {authenticate} from "../../../actions/authenticate";

const mapStateToProps = state => {
    return {isAuthenticated: state.isAuthenticated};
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        authenticate: () => dispatch(authenticate()),
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
        localStorage.setItem('authenticated', 'no');
    };

    render() {
        return (
            <header className="header">
                <nav className="nav nav-pills justify-content-end">
                    <Link to="/" className="nav-item nav-link" href="#">Main page</Link>
                    <Link to="/about" className="nav-item nav-link" href="#">About</Link>
                    <Link to="/account" className="nav-item nav-link" href="#">Account</Link>
                    {
                        (this.props.isAuthenticated) ?
                            <Link exact to="/" onClick={this.logout} href="#" className="nav-item nav-link">Log
                                out</Link> :
                            <Link to="/login" className="nav-item nav-link" href="#">Login</Link>
                    }
                </nav>
            </header>
        );
    }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(connectedHeader);
export default Header;
