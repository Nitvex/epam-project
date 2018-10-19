import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './App.css';
import Header from './Header/Header';
import Slider from './Slider/Slider';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Slider/>
                Our locations
            </div>
        );
    }
}

export default App;
