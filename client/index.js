import React from 'react';
import ReactDOM  from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import styles from './scss/application.scss';

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
);