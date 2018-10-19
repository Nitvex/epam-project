import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import Location from './Location/Location';
import {logout} from "../../actions/logout";
import {authenticate} from "../../actions/authenticate";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {isAuthenticated: state.isAuthenticated};
};
const mapDispatchToProps = dispatch => {
    return {
        authenticate: () => dispatch(authenticate()),
    };
};

class connectedApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: [
                {
                    location: "Pushinskaya 12",
                    time: "Mon-San | 10:00 - 22:00",
                    subway: "Mayakovskaya"
                },
                {
                    location: "8th Krasnoarmeyskaya 4/5",
                    time: "Mon-San | 11:00 - 22:00",
                    subway: "Technologiskiy institut"
                },
                {
                    location: "Voskova 16",
                    time: "Mon-San | 10:00 - 22:00",
                    subway: "Gor'kovskaya"
                },
                {
                    location: "Kirochnaya 9",
                    time: "Mon-San | 10:00 - 21:00",
                    subway: "Chernyshevskaya"
                },
                {
                    location: "M. Dudina, 32 K1",
                    time: "Mon-San | 10:00 - 22:00",
                    subway: "Parnas"
                },
                {
                    location: "Moskovkiy pr. 6",
                    time: "Mon-San | 10:00 - 22:00",
                    subway: "Sadovaya"
                },
                {
                    location: "Prospekt Koroleva 2",
                    time: "Mon-San | 10:00 - 22:00",
                    subway: "Pionerskaya"
                },
                {
                    location: "Pr. entuziastov, 33 K1",
                    time: "Mon-San | 10:00 - 22:00",
                    subway: "Ladozhskaya"
                },
            ]
        }
    }

    componentDidMount() {
        if (localStorage.getItem('authenticated') === 'true') {
            this.props.authenticate();
        }
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Slider/>
                <p className="our-locations">Our locations</p>
                <div className="locations">
                    {
                        this.state.locations.map((location) => {
                            return <Location key={location.location + location.time + location.master}
                                             location={location.location}
                                             time={location.time}
                                             subway={location.subway}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(connectedApp);
export default App;
