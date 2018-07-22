import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore} from 'redux';
import {CounterReducer} from "./Counter/CounterReducer";
import CounterContainer from "./Counter";
import {FormReducer} from "./Form/FormReducer";

const store = createStore(combineReducers({
    counter: CounterReducer,
    form: FormReducer,
}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root'));
registerServiceWorker();
