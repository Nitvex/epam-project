import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                Hello App
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

export default App;
