import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer, { sequence: 'prime', number: NaN, argsArray: [1, 4], error: { isError: false, msg: '' } });

ReactDOM.render(<Provider store= {store}><App /></Provider>, document.getElementById('root'));
