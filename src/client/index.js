import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* Components */
import App from './components/main/App';
import About from './components/about/About';
import Account from './components/account/Account';
import Login from './components/login/Login';
/* Routing */
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {PrivateRoute} from "./components/globalComponents/PrivateRouter/PrivateRouter";
/* Store */
import {Provider} from "react-redux";
import store from "./store/index";
/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/about" component={About}/>
                <PrivateRoute path="/account" component={Account}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));

