import React from 'react';
import './style.css';


const Location = ({location, time, subway}) => {
    return(
        <div className="location-container m-2">
            <div className="location">
                <p className="m-0">{location}</p>
                <p className="m-0">{time}</p>
                <img src={require('../../../assets/images/msk_metro_logo.jpg')} alt="subway"/>
                <p className="m-0">{subway}</p>
            </div>
        </div>
    )
};



export default Location;
