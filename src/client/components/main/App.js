import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './App.css';
import Header from '../globalComponents/Header/Header';
import Slider from './Slider/Slider';
import Location from './Location/Location';
import Master from './Master/Master';
import {authenticate} from "../../store/actions/authentication/authenticate";
import {fetchLocations} from "../../store/actions/locations/fetchLocations";
import {fetchInfo} from "../../store/actions/info/fetchInfo";
import {connect} from "react-redux";


const mapStateToProps = ({authenticationReducer, locationsReducer, informationReducer}) => {
    return {
        isAuthenticated: authenticationReducer.isAuthenticated,
        locations: locationsReducer.locations,
        masters: informationReducer.masters,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        authenticate: () => dispatch(authenticate()),
        fetchLocations: () => dispatch(fetchLocations()),
        fetchInfo: () => dispatch(fetchInfo()),
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
        if (this.props.masters.length === 0) {
            this.props.fetchInfo();
        }
    }

    render() {

        return (
            <div className="app">
                <Header activePage="mainPage"/>
                <Slider/>
                <div className="subheader"><h1><span>Our locations</span></h1></div>
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
                <div className="subheader"><h1><span>Our masters</span></h1></div>
                <div className="masters">
                    {
                        this.props.masters.map((m, index) => {
                            return <Master
                                key={index}
                                name={m.name}
                                description={m.description}
                                photo={m.photo}
                                order={index}
                            />
                        })
                    }
                </div>
                <Link to="/account">
                    <button className="login-btn">Make an appointment</button>
                </Link>
            </div>
        );
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(connectedApp);
export default App;
