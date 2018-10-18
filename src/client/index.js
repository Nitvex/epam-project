import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/main/App';
import About from './components/about/About';
import Account from './components/account/Account';
import Login from './components/login/Login';
import {HashRouter as Router, Route, Switch} from "react-router-dom";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/account" component={Account}/>
            <Route path="/login" component={Login}/>
        </Switch>
    </Router>,
    document.getElementById('root'));

