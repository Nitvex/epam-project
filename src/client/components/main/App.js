import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import Location from './Location/Location';
import {authenticate} from "../../actions/authenticate";
import {fetchLocations} from "../../actions/fetchLocations";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated,
        locations: state.locations,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        authenticate: () => dispatch(authenticate()),
        fetchLocations: () => dispatch(fetchLocations()),
    };
};

class connectedApp extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.locations.length === 0) {
            this.props.fetchLocations();
        }
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Slider/>
                <div className="our-locations"><h1><span>Our locations</span></h1></div>
                <div className="locations">
                    {
                        this.props.locations.map((location) => {
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
