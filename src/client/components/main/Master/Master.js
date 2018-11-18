import React from 'react';
import './style.css';


const Master = ({name, photo, description, order}) => {
    return (
        <div className="master-container m-2">
            {order % 2 === 0 ?
                <div className="master">
                    <img className="w-50" src={require(`../../../assets/images/${photo}.jpg`)} alt={name}/>
                    <div className="w-50 text">
                        <p className="head">{name}</p>
                        <p className="description">{description}</p>
                    </div>
                </div>
                :
                <div className="master">
                    <div className="w-50 text">
                        <p className="head">{name}</p>
                        <p className="description">{description}</p>
                    </div>
                    <img className="w-50" src={require(`../../../assets/images/${photo}.jpg`)} alt={name}/>
                </div>
            }
        </div>
    )
};


export default Master;
