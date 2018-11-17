import React from 'react';
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = (props) => {
    return (
        (localStorage.getItem('authenticated') === 'yes') ?
            <Route {...props}/>
            :
            <Redirect
                to={{
                    pathname: '/login',
                }}
            />

    );

};


