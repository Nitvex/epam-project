import React, {Component} from 'react';
import './style.css';


class Location extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="location-container m-2">
                <div className="location">
                    <p className="m-0">{this.props.location}</p>
                    <p className="m-0">{this.props.time}</p>
                    <img src={require('../../../assets/images/msk_metro_logo.jpg')} alt="subway"/>
                    <p className="m-0">{this.props.subway}</p>
                </div>
            </div>
        );
    }
}

export default Location;
