import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reduce from './reducers/PointReducer'
let PointReducer =  reduce.PointReducer;

//>>>  ค่าจาก reducer มาเซ็ทไว้ที่สโตร
const store = createStore(combineReducers({PointReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/*
store.subscribe(()=>{
    console.log("Current Value : ", store.getState());
});*/
/*
store.dispatch({
    type: "setPoint",
    payload: 0
});*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
