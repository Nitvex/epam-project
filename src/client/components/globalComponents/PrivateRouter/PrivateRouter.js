import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from "react-router-dom";

const mapStateToProps = (authenticationReducer) => {
    return {isAuthenticated: authenticationReducer.isAuthenticated};
};

class connectedPrivateRoute extends Component {

    render() {
        return (
            (localStorage.getItem('authenticated') === 'yes') ?
                <Route {...this.props}/>
                :
                <Redirect
                    to={{
                        pathname: '/login',
                    }}
                />

        );
    }
}

export const PrivateRoute = connect(mapStateToProps)(connectedPrivateRoute);

