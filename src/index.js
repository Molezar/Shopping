import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

import {Provider} from 'react-redux';

import App from './App';

import createStore from './store';
const store = createStore();

setTimeout(function(){
 store.dispatch({
    type: 'wert',
 });
}, 1000);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
     document.getElementById('root')
    );