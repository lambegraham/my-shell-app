import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Table from './components/Table';

import * as firebase from 'firebase';

import Firebase from './components/Firebase';


const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/Home" component={Home} />
            <Route path="/Table" component={Table} />

        </div>
    </Router>
        )
        
ReactDOM.render(routing, document.getElementById('root'));
        
        
        
