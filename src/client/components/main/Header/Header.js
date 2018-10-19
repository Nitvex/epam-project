import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './style.css';


class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav className="nav nav-pills justify-content-end">
                    <Link to="/" className="nav-item nav-link" href="#">Main page</Link>
                    <Link to="/about" className="nav-item nav-link" href="#">About</Link>
                    <Link to="/account" className="nav-item nav-link" href="#">Account</Link>
                    <Link to="/login" className="nav-item nav-link" href="#">login</Link>
                </nav>
            </header>
        );
    }
}

export default Header;
