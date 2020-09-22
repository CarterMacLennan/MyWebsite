import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import '../src/style/styles.css';
import { HashRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
     document.getElementById('root')
);