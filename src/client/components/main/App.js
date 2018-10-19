import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './App.css';
import Header from './Header/header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
            </div>
        );
    }
}

export default App;
