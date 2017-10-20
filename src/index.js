import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import StateExample from "./components/StateExample";

const rootElement = document.getElementById('root');
const stateElement = document.getElementById('state');
ReactDOM.render(<App />, rootElement);
ReactDOM.render(<StateExample />, stateElement);