import React, {Component} from 'react';
import {Link} from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div>
                about
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

export default About;
