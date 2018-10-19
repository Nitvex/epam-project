import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from "react-router-dom";

const mapStateToProps = state => {
    return {isAuthenticated: state.isAuthenticated};
};

class connectedPrivateRoute extends Component {

    render() {
        return (
            (localStorage.getItem('authenticated') === 'true') ?
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
